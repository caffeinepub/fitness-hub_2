import MixinStorage "blob-storage/Mixin";
import Map "mo:core/Map";
import List "mo:core/List";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  include MixinStorage();

  type Service = {
    id : Nat;
    name : Text;
    description : Text;
    price : ?Text;
  };

  type BusinessInfo = {
    name : Text;
    address : Text;
    phone : Text;
    hours : Text;
    website : Text;
    description : Text;
  };

  let services = Map.empty<Nat, Service>();
  var nextServiceId = 1;

  public func addService(name : Text, description : Text, price : ?Text) : async () {
    let newService : Service = {
      id = nextServiceId;
      name;
      description;
      price;
    };
    services.add(nextServiceId, newService);
    nextServiceId += 1;
  };

  public query func getService(id : Nat) : async ?Service {
    services.get(id);
  };

  public query func getAllServices() : async [Service] {
    services.values().toArray();
  };

  public func updateService(id : Nat, name : Text, description : Text, price : ?Text) : async () {
    switch (services.get(id)) {
      case (null) { Runtime.trap("Service not found") };
      case (?existingService) {
        let updatedService : Service = {
          id;
          name;
          description;
          price;
        };
        services.add(id, updatedService);
      };
    };
  };

  public func deleteService(id : Nat) : async () {
    if (not services.containsKey(id)) {
      Runtime.trap("Service not found");
    };
    services.remove(id);
  };

  public query func getBusinessInfo() : async BusinessInfo {
    {
      name = "Bodyshape Fitness";
      address = "11009 Webb Chapel Rd Dallas, TX 75229";
      phone = "+1 469-522-3562";
      hours = "Mon-Fri: 8:00 AM - 7:00 PM\nSat-Sun: 10:00 AM - 4:00 PM";
      website = "https://www.bodyshapefitness.care/";
      description = "Welcome to Bodyshape Fitness, your local personal trainer in Dallas, TX. With over 20 years of experience, we are dedicated to helping you achieve your fitness goals through personalized training programs, intensive boot camps, and specialized nutritional guidance. Our facility is equipped with new machines, and we offer bilingual services in English and Spanish. Whether you're looking to lose weight, build muscle, or improve your overall health, Bodyshape Fitness is here to support you every step of the way. Join us today and start your journey to a healthier, stronger you!";
    };
  };

  public func addMultipleServices(newServices : [Service]) : async () {
    let servicesList = List.empty<Service>();
    for (service in newServices.values()) {
      servicesList.add(service);
    };

    let servicesArray = servicesList.toArray();
    for (service in servicesArray.values()) {
      let serviceId = nextServiceId;
      let newService : Service = {
        id = serviceId;
        name = service.name;
        description = service.description;
        price = service.price;
      };
      services.add(serviceId, newService);
      nextServiceId += 1;
    };
  };
};
