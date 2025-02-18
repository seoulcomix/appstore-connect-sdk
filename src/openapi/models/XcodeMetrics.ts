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
import type { XcodeMetricsInsights } from './XcodeMetricsInsights';
import {
    XcodeMetricsInsightsFromJSON,
    XcodeMetricsInsightsFromJSONTyped,
    XcodeMetricsInsightsToJSON,
} from './XcodeMetricsInsights';
import type { XcodeMetricsProductDataInner } from './XcodeMetricsProductDataInner';
import {
    XcodeMetricsProductDataInnerFromJSON,
    XcodeMetricsProductDataInnerFromJSONTyped,
    XcodeMetricsProductDataInnerToJSON,
} from './XcodeMetricsProductDataInner';

/**
 * 
 * @export
 * @interface XcodeMetrics
 */
export interface XcodeMetrics {
    /**
     * 
     * @type {string}
     * @memberof XcodeMetrics
     */
    version?: string;
    /**
     * 
     * @type {XcodeMetricsInsights}
     * @memberof XcodeMetrics
     */
    insights?: XcodeMetricsInsights;
    /**
     * 
     * @type {Array<XcodeMetricsProductDataInner>}
     * @memberof XcodeMetrics
     */
    productData?: Array<XcodeMetricsProductDataInner>;
}

/**
 * Check if a given object implements the XcodeMetrics interface.
 */
export function instanceOfXcodeMetrics(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function XcodeMetricsFromJSON(json: any): XcodeMetrics {
    return XcodeMetricsFromJSONTyped(json, false);
}

export function XcodeMetricsFromJSONTyped(json: any, ignoreDiscriminator: boolean): XcodeMetrics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'insights': !exists(json, 'insights') ? undefined : XcodeMetricsInsightsFromJSON(json['insights']),
        'productData': !exists(json, 'productData') ? undefined : ((json['productData'] as Array<any>).map(XcodeMetricsProductDataInnerFromJSON)),
    };
}

export function XcodeMetricsToJSON(value?: XcodeMetrics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'insights': XcodeMetricsInsightsToJSON(value.insights),
        'productData': value.productData === undefined ? undefined : ((value.productData as Array<any>).map(XcodeMetricsProductDataInnerToJSON)),
    };
}

