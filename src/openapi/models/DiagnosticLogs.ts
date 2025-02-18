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
import type { DiagnosticLogsProductDataInner } from './DiagnosticLogsProductDataInner';
import {
    DiagnosticLogsProductDataInnerFromJSON,
    DiagnosticLogsProductDataInnerFromJSONTyped,
    DiagnosticLogsProductDataInnerToJSON,
} from './DiagnosticLogsProductDataInner';

/**
 * 
 * @export
 * @interface DiagnosticLogs
 */
export interface DiagnosticLogs {
    /**
     * 
     * @type {Array<DiagnosticLogsProductDataInner>}
     * @memberof DiagnosticLogs
     */
    productData?: Array<DiagnosticLogsProductDataInner>;
    /**
     * 
     * @type {string}
     * @memberof DiagnosticLogs
     */
    version?: string;
}

/**
 * Check if a given object implements the DiagnosticLogs interface.
 */
export function instanceOfDiagnosticLogs(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiagnosticLogsFromJSON(json: any): DiagnosticLogs {
    return DiagnosticLogsFromJSONTyped(json, false);
}

export function DiagnosticLogsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticLogs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productData': !exists(json, 'productData') ? undefined : ((json['productData'] as Array<any>).map(DiagnosticLogsProductDataInnerFromJSON)),
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function DiagnosticLogsToJSON(value?: DiagnosticLogs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productData': value.productData === undefined ? undefined : ((value.productData as Array<any>).map(DiagnosticLogsProductDataInnerToJSON)),
        'version': value.version,
    };
}

