import B1 from '../../src/assets/images/bikes/BMW-G310R.jpg'
import B2 from '../../src/assets/images/bikes/Honda-Hornet.png'
import B3 from '../../src/assets/images/bikes/ktm -duke.jpg'
import B4 from '../../src/assets/images/bikes/KTM RC-200.png'
import B5 from '../../src/assets/images/bikes/ktm-adventure-390.png'
import B6 from '../../src/assets/images/bikes/KTM-Duke-200.png'
import B7 from '../../src/assets/images/bikes/Ktm-RC-390.webp'
import B8 from '../../src/assets/images/bikes/r15-v4.png'
import B9 from '../../src/assets/images/bikes/RE Standard-350.png'
import B10 from '../../src/assets/images/bikes/RE-Himalayan.png'
import B11 from '../../src/assets/images/bikes/RE-Interceptor-650.png'
import B12 from '../../src/assets/images/bikes/RE-Meteor-blue.png'
import B13 from '../../src/assets/images/bikes/RE-Thunderbird.png'
import B14 from '../../src/assets/images/bikes/TVS-Apache-RTR-200.png'
import B15 from '../../src/assets/images/bikes/Yamaha-FZS-v3.png'



export const BikeListing = [
  {

    bike_model: "Royal Enfield Classic 350",
    pickup_city: "Delhi",
    pickup_site: ["Connaught Place", "Karol Bagh", "Lajpat Nagar"],
    onewaytrip: 16500, 
    roundtrip: 15500, 
    image: B9,
    extras: { helmet_count: 1, gps: true, insurance: 300 },
    status: "AVAILABLE",
    specs: { engine: "346cc, Single Cylinder, 4-Stroke, Air Cooled", torque: "28 Nm @ 4000 rpm", suspension: "Telescopic Front Forks, Twin Shock Absorbers Rear", ground_clearance: "135 mm", weight: "192 kg", fuel_tank_capacity: "13.5 L", mileage: "35 km/l", tires: "Front: 90/90-19, Rear: 110/90-18", comfort: "Well-cushioned seats, Upright riding posture", reliability_serviceability: "High reliability, Wide service network", braking_system: "Front: Disc, Rear: Disc", luggage_capacity: "Small rear luggage rack available" }
  },
  {
    
    bike_model: "Royal Enfield Himalayan", 
    pickup_city: "Delhi",
    pickup_site: ["Karol Bagh", "Dwarka", "Saket"],
    onewaytrip: 18500, 
    roundtrip: 17500,
    image: B10,
    extras: { helmet_count: 2, gps: true, insurance: 350 },
    status: "AVAILABLE",
    specs: { engine: "411cc, Single Cylinder, 4-Stroke, Air Cooled", torque: "32 Nm @ 4000 rpm", suspension: "Telescopic Front, Monoshock Rear", ground_clearance: "220 mm", weight: "199 kg", fuel_tank_capacity: "15 L", mileage: "30 km/l", tires: "Front: 90/90-21, Rear: 120/90-17", comfort: "Long-travel suspension, Upright seating", reliability_serviceability: "Durable for rough terrain", braking_system: "Front: Disc, Rear: Disc", luggage_capacity: "Optional panniers supported" }
  },
  {
    
    bike_model: "KTM Duke 390",
    pickup_city: "Delhi",
    pickup_site: ["Rajiv Chowk", "Nehru Place", "Dwarka Sector 21"],
    onewaytrip: 19000,
    roundtrip: 18000, 
    image: B5,
    extras: { helmet_count: 1, gps: true, insurance: 400 },
    status: "AVAILABLE",
    specs: { engine: "373cc, Single Cylinder, Liquid Cooled", torque: "36 Nm @ 7000 rpm", suspension: "Upside-down Front Fork, Monoshock Rear", ground_clearance: "167 mm", weight: "172 kg", fuel_tank_capacity: "13.4 L", mileage: "25 km/l", tires: "Front: 110/70-17, Rear: 150/60-17", comfort: "Sporty upright riding, Narrow seat", reliability_serviceability: "Good, Parts easily available", braking_system: "Front: Disc, Rear: Disc, ABS", luggage_capacity: "Minimal, small tail bag recommended" }
  },
  {
    
    bike_model: "Yamaha FZ-S", 
    pickup_city: "Dehradun",
    pickup_site: ["ISBT Dehradun"],
    onewaytrip: 11500, 
    roundtrip: 10500, 
    image: B15,
    extras: { helmet_count: 1, gps: false, insurance: 200 },
    status: "AVAILABLE",
    specs: { engine: "149cc, Single Cylinder, Air Cooled", torque: "13.6 Nm @ 6000 rpm", suspension: "Telescopic Front, Monoshock Rear", ground_clearance: "160 mm", weight: "132 kg", fuel_tank_capacity: "12 L", mileage: "45 km/l", tires: "Front: 80/100-17, Rear: 100/90-17", comfort: "City-friendly upright seating", reliability_serviceability: "Low maintenance, Widely available parts", braking_system: "Front: Disc, Rear: Drum", luggage_capacity: "No fixed luggage, small backpack recommended" }
  },
  {
    
    bike_model: "Honda CB350",
    pickup_city: "Delhi",
    pickup_site: ["Dwarka", "Karol Bagh", "Lajpat Nagar"],
    onewaytrip: 16000,
    roundtrip: 15000,
    image: B2,
    extras: { helmet_count: 2, gps: true, insurance: 280 },
    status: "AVAILABLE",
    specs: { engine: "348cc, Single Cylinder, Air Cooled", torque: "30 Nm @ 3000 rpm", suspension: "Telescopic Front, Twin Shock Rear", ground_clearance: "165 mm", weight: "181 kg", fuel_tank_capacity: "15 L", mileage: "35 km/l", tires: "Front: 100/90-19, Rear: 120/80-18", comfort: "Cruiser seating, Relaxed ergonomics", reliability_serviceability: "High, Good service network", braking_system: "Front: Disc, Rear: Disc, ABS", luggage_capacity: "Rear luggage rack supported" }
  },
  {
   
    bike_model: "Royal Enfield Meteor 350",
    pickup_city: "Chandigarh",
    pickup_site: ["Chandigarh Airport"],
    onewaytrip: 17000,
    roundtrip: 16000,
    image: B12,
    extras: { helmet_count: 1, gps: true, insurance: 320 },
    status: "AVAILABLE",
    specs: { engine: "349cc, Single Cylinder, Air Cooled", torque: "27 Nm @ 5250 rpm", suspension: "Telescopic Front, Twin Shock Rear", ground_clearance: "170 mm", weight: "191 kg", fuel_tank_capacity: "15 L", mileage: "38 km/l", tires: "Front: 100/90-19, Rear: 140/70-17", comfort: "Relaxed cruiser seating", reliability_serviceability: "High, Regular service available", braking_system: "Front: Disc, Rear: Disc, ABS", luggage_capacity: "Small rear rack for luggage" }
  },
  {
   
    bike_model: "KTM Adventure 390",
    pickup_city: "Delhi",
    pickup_site: ["Saket", "Nehru Place", "Rajiv Chowk"],
    onewaytrip: 19500,
    roundtrip: 18500,
    image: B5,
    extras: { helmet_count: 2, gps: true, insurance: 420 },
    status: "AVAILABLE",
    specs: { engine: "373cc, Single Cylinder, Liquid Cooled", torque: "36 Nm @ 7000 rpm", suspension: "Upside-down Front Fork, Monoshock Rear", ground_clearance: "200 mm", weight: "172 kg", fuel_tank_capacity: "14 L", mileage: "25 km/l", tires: "Front: 110/80-19, Rear: 150/70-17", comfort: "Adventure posture, Adjustable seat height", reliability_serviceability: "Good, Requires authorized service", braking_system: "Front: Disc, Rear: Disc, ABS", luggage_capacity: "Supports panniers and top box" }
  },
  {
    
    bike_model: "Hero XPulse 200",
    pickup_city: "Dehradun",
    pickup_site: ["Clock Tower"],
    onewaytrip: 10500,
    roundtrip: 10000,
    image: B3,
    extras: { helmet_count: 1, gps: false, insurance: 180 },
    status: "AVAILABLE",
    specs: { engine: "199cc, Single Cylinder, Air Cooled", torque: "17.1 Nm @ 6750 rpm", suspension: "Telescopic Front, Monoshock Rear", ground_clearance: "220 mm", weight: "157 kg", fuel_tank_capacity: "13 L", mileage: "40 km/l", tires: "Front: 90/90-21, Rear: 120/90-18", comfort: "Upright adventure seating", reliability_serviceability: "Easy service, Durable", braking_system: "Front: Disc, Rear: Disc, ABS", luggage_capacity: "Minimal, small saddlebag possible" }
  },
  {
   
    bike_model: "Royal Enfield Thunderbird 350X",
    pickup_city: "Chandigarh",
    pickup_site: ["Elante Mall"],
    onewaytrip: 16800,
    roundtrip: 15800,
    image: B13,
    extras: { helmet_count: 2, gps: true, insurance: 310 },
    status: "AVAILABLE",
    specs: { engine: "346cc, Single Cylinder, Air Cooled", torque: "28 Nm @ 4000 rpm", suspension: "Telescopic Front, Twin Shock Rear", ground_clearance: "135 mm", weight: "192 kg", fuel_tank_capacity: "14 L", mileage: "34 km/l", tires: "Front: 90/90-19, Rear: 110/90-18", comfort: "Cruiser style upright seating", reliability_serviceability: "Reliable, Easy to maintain", braking_system: "Front: Disc, Rear: Disc, ABS", luggage_capacity: "Optional rear carrier" }
  },
  {
    
    bike_model: "KTM RC 200",
    pickup_city: "Delhi",
    pickup_site: ["Connaught Place", "Karol Bagh", "Dwarka"],
    onewaytrip: 14000,
    roundtrip: 13000,
    image: B4,
    extras: { helmet_count: 1, gps: true, insurance: 380 },
    status: "AVAILABLE",
    specs: { engine: "199cc, Single Cylinder, Liquid Cooled", torque: "19 Nm @ 8000 rpm", suspension: "Upside-down Front Fork, Monoshock Rear", ground_clearance: "180 mm", weight: "160 kg", fuel_tank_capacity: "10 L", mileage: "35 km/l", tires: "Front: 110/70-17, Rear: 150/60-17", comfort: "Sport seating, aggressive posture", reliability_serviceability: "High performance, Requires service at KTM centers", braking_system: "Front: Disc, Rear: Disc, ABS", luggage_capacity: "No luggage support" }
  },
  {
    
    bike_model: "Yamaha R15 V4",
    pickup_city: "Chandigarh",
    pickup_site: ["Sector 17"],
    onewaytrip: 13500,
    roundtrip: 12500,
    image: B8,
    extras: { helmet_count: 1, gps: false, insurance: 350 },
    status: "AVAILABLE",
    specs: { engine: "155cc, Single Cylinder, Liquid Cooled", torque: "14.2 Nm @ 7500 rpm", suspension: "Telescopic Front, Monoshock Rear", ground_clearance: "170 mm", weight: "142 kg", fuel_tank_capacity: "11 L", mileage: "40 km/l", tires: "Front: 100/80-17, Rear: 140/70-17", comfort: "Sport seating, aggressive posture", reliability_serviceability: "Good, Easy to service", braking_system: "Front: Disc, Rear: Disc, ABS", luggage_capacity: "No luggage support" }
  },
  {

    bike_model: "Honda Hornet 2.0",
    pickup_city: "Delhi",
    pickup_site: ["Saket", "Lajpat Nagar", "Karol Bagh"],
    onewaytrip: 12500,
    roundtrip: 11500,
    image: B2,
    extras: { helmet_count: 1, gps: true, insurance: 280 },
    status: "AVAILABLE",
    specs: { engine: "184cc, Single Cylinder, Air Cooled", torque: "16.1 Nm @ 6500 rpm", suspension: "Telescopic Front, Monoshock Rear", ground_clearance: "162 mm", weight: "142 kg", fuel_tank_capacity: "12 L", mileage: "40 km/l", tires: "Front: 100/80-17, Rear: 130/70-17", comfort: "Upright seating, Sporty posture", reliability_serviceability: "High reliability", braking_system: "Front: Disc, Rear: Disc, ABS", luggage_capacity: "No luggage support" }
  },
  {
  
    bike_model: "Bajaj Pulsar NS200",
    pickup_city: "Dehradun",
    pickup_site: ["Clock Tower"],
    onewaytrip: 12800,
    roundtrip: 11800,
    image: B11,
    extras: { helmet_count: 1, gps: false, insurance: 200 },
    status: "AVAILABLE",
    specs: { engine: "199cc, Single Cylinder, Liquid Cooled", torque: "18.3 Nm @ 8500 rpm", suspension: "Telescopic Front, Monoshock Rear", ground_clearance: "170 mm", weight: "154 kg", fuel_tank_capacity: "12 L", mileage: "37 km/l", tires: "Front: 90/90-17, Rear: 120/80-17", comfort: "Upright sporty seating", reliability_serviceability: "Easy to maintain", braking_system: "Front: Disc, Rear: Disc, ABS", luggage_capacity: "Small tail bag possible" }
  },
  {
   
    bike_model: "KTM Duke 200",
    pickup_city: "Delhi",
    pickup_site: ["Rajiv Chowk", "Nehru Place", "Dwarka Sector 21"],
    onewaytrip: 13800,
    roundtrip: 12800,
    image: B6,
    extras: { helmet_count: 1, gps: true, insurance: 320 },
    status: "AVAILABLE",
    specs: { engine: "199cc, Single Cylinder, Liquid Cooled", torque: "19 Nm @ 8000 rpm", suspension: "Upside-down Front Fork, Monoshock Rear", ground_clearance: "160 mm", weight: "156 kg", fuel_tank_capacity: "13.5 L", mileage: "35 km/l", tires: "Front: 110/70-17, Rear: 150/60-17", comfort: "Sport upright seating", reliability_serviceability: "High performance", braking_system: "Front: Disc, Rear: Disc, ABS", luggage_capacity: "No luggage support" }
  },
  {
    
    bike_model: "TVS Apache RTR 200 4V",
    pickup_city: "Chandigarh",
    pickup_site: ["Elante Mall"],
    onewaytrip: 12300,
    roundtrip: 11300,
    image: B14,
    extras: { helmet_count: 1, gps: false, insurance: 220 },
    status: "AVAILABLE",
    specs: { engine: "197cc, Single Cylinder, Oil Cooled", torque: "18.1 Nm @ 8000 rpm", suspension: "Telescopic Front, Monoshock Rear", ground_clearance: "165 mm", weight: "153 kg", fuel_tank_capacity: "12 L", mileage: "38 km/l", tires: "Front: 90/90-17, Rear: 120/80-17", comfort: "Sporty upright posture", reliability_serviceability: "Good, Widely available service", braking_system: "Front: Disc, Rear: Disc, ABS", luggage_capacity: "Small tail bag possible" }
  },]