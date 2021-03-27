
type LaunchFailureDetailsType = {
    time: number
    altitude: null
    reason: string
}

type LaunchSiteType = {
    site_id: string
    site_name: string
    site_name_long: string
}

type LinksType = {
    mission_patch_small: string | null | undefined
}
type RocketType = {
    rocket_id: string
    rocket_name: string
    rocket_type: string

}

export type DataType = {
    crew: null
    details: string | null
    flight_number: number
    is_tentative: boolean
    launch_date_local: string
    launch_date_unix: number
    launch_date_utc: string
    launch_failure_details: LaunchFailureDetailsType
    launch_site: LaunchSiteType
    launch_success: boolean
    launch_window: number
    launch_year: string
    links: LinksType
    mission_id: []
    mission_name: string
    rocket: RocketType
    ships: []
    static_fire_date_unix: number
    static_fire_date_utc: string
    tbd: boolean
    telemetry: {flight_club: null}
    tentative_max_precision: string
    timeline: {webcast_liftoff: number}
    upcoming: boolean
}