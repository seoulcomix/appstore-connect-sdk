/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PerfPowerMetricAttributes
 */
export interface PerfPowerMetricAttributes {
    /**
     * 
     * @type {string}
     * @memberof PerfPowerMetricAttributes
     */
    platform?: PerfPowerMetricAttributesPlatformEnum;
    /**
     * 
     * @type {string}
     * @memberof PerfPowerMetricAttributes
     */
    metricType?: PerfPowerMetricAttributesMetricTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PerfPowerMetricAttributes
     */
    deviceType?: string;
}


/**
 * @export
 */
export const PerfPowerMetricAttributesPlatformEnum = {
    Ios: 'IOS'
} as const;
export type PerfPowerMetricAttributesPlatformEnum = typeof PerfPowerMetricAttributesPlatformEnum[keyof typeof PerfPowerMetricAttributesPlatformEnum];

/**
 * @export
 */
export const PerfPowerMetricAttributesMetricTypeEnum = {
    Disk: 'DISK',
    Hang: 'HANG',
    Battery: 'BATTERY',
    Launch: 'LAUNCH',
    Memory: 'MEMORY',
    Animation: 'ANIMATION',
    Termination: 'TERMINATION'
} as const;
export type PerfPowerMetricAttributesMetricTypeEnum = typeof PerfPowerMetricAttributesMetricTypeEnum[keyof typeof PerfPowerMetricAttributesMetricTypeEnum];


/**
 * Check if a given object implements the PerfPowerMetricAttributes interface.
 */
export function instanceOfPerfPowerMetricAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PerfPowerMetricAttributesFromJSON(json: any): PerfPowerMetricAttributes {
    return PerfPowerMetricAttributesFromJSONTyped(json, false);
}

export function PerfPowerMetricAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PerfPowerMetricAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'platform': !exists(json, 'platform') ? undefined : json['platform'],
        'metricType': !exists(json, 'metricType') ? undefined : json['metricType'],
        'deviceType': !exists(json, 'deviceType') ? undefined : json['deviceType'],
    };
}

export function PerfPowerMetricAttributesToJSON(value?: PerfPowerMetricAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'platform': value.platform,
        'metricType': value.metricType,
        'deviceType': value.deviceType,
    };
}

