import { 
  users, 
  reservations, 
  contactMessages, 
  newsletterSubscriptions,
  type User, 
  type InsertUser, 
  type Reservation, 
  type InsertReservation,
  type ContactMessage,
  type InsertContactMessage,
  type Newsletter,
  type InsertNewsletter
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  getReservations(): Promise<Reservation[]>;
  getReservation(id: number): Promise<Reservation | undefined>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  subscribeToNewsletter(subscription: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscriptions(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private reservations: Map<number, Reservation>;
  private contactMessages: Map<number, ContactMessage>;
  private newsletterSubscriptions: Map<number, Newsletter>;
  private currentUserId: number;
  private currentReservationId: number;
  private currentContactId: number;
  private currentNewsletterId: number;

  constructor() {
    this.users = new Map();
    this.reservations = new Map();
    this.contactMessages = new Map();
    this.newsletterSubscriptions = new Map();
    this.currentUserId = 1;
    this.currentReservationId = 1;
    this.currentContactId = 1;
    this.currentNewsletterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createReservation(insertReservation: InsertReservation): Promise<Reservation> {
    const id = this.currentReservationId++;
    const reservation: Reservation = { 
      ...insertReservation, 
      id, 
      status: "pending",
      createdAt: new Date(),
      specialRequests: insertReservation.specialRequests || null
    };
    this.reservations.set(id, reservation);
    return reservation;
  }

  async getReservations(): Promise<Reservation[]> {
    return Array.from(this.reservations.values());
  }

  async getReservation(id: number): Promise<Reservation | undefined> {
    return this.reservations.get(id);
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactId++;
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async subscribeToNewsletter(insertSubscription: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentNewsletterId++;
    const subscription: Newsletter = {
      ...insertSubscription,
      id,
      subscribedAt: new Date()
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }
}

export const storage = new MemStorage();
