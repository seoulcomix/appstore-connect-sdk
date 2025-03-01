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
import type { PerfPowerMetricAttributes } from './PerfPowerMetricAttributes';
import {
    PerfPowerMetricAttributesFromJSON,
    PerfPowerMetricAttributesFromJSONTyped,
    PerfPowerMetricAttributesToJSON,
} from './PerfPowerMetricAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface PerfPowerMetric
 */
export interface PerfPowerMetric {
    /**
     * 
     * @type {string}
     * @memberof PerfPowerMetric
     */
    type: PerfPowerMetricTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PerfPowerMetric
     */
    id: string;
    /**
     * 
     * @type {PerfPowerMetricAttributes}
     * @memberof PerfPowerMetric
     */
    attributes?: PerfPowerMetricAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof PerfPowerMetric
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const PerfPowerMetricTypeEnum = {
    PerfPowerMetrics: 'perfPowerMetrics'
} as const;
export type PerfPowerMetricTypeEnum = typeof PerfPowerMetricTypeEnum[keyof typeof PerfPowerMetricTypeEnum];


/**
 * Check if a given object implements the PerfPowerMetric interface.
 */
export function instanceOfPerfPowerMetric(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function PerfPowerMetricFromJSON(json: any): PerfPowerMetric {
    return PerfPowerMetricFromJSONTyped(json, false);
}

export function PerfPowerMetricFromJSONTyped(json: any, ignoreDiscriminator: boolean): PerfPowerMetric {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : PerfPowerMetricAttributesFromJSON(json['attributes']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function PerfPowerMetricToJSON(value?: PerfPowerMetric | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': PerfPowerMetricAttributesToJSON(value.attributes),
        'links': ResourceLinksToJSON(value.links),
    };
}

