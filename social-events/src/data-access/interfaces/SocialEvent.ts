import {User} from "./User";

export interface SocialEvent {
    id: string
    name: string
    type: EventType
    startDate: Date
    endDate: Date
    location: MeetupLocation
    organizer: User
    attendances: MeetupUserAttendance[]
}

interface MeetupLocation {
    city: string
    address: string
    coordinates: {
        latitude: number
        longitude: number
    }
}

interface MeetupUserAttendance {
    attendee: User
    state: AttendanceState
}

export enum AttendanceState {
    INTERESTED,
    NOT_GOING,
    GOING,
    CHECKED_IN,
}

export enum EventType {
    PARTY,
    STUDY,
    FORMAL,
    QUIZ,
    SOCIAL,
}