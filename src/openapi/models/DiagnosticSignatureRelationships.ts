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
import type { AnalyticsReportInstanceRelationshipsSegments } from './AnalyticsReportInstanceRelationshipsSegments';
import {
    AnalyticsReportInstanceRelationshipsSegmentsFromJSON,
    AnalyticsReportInstanceRelationshipsSegmentsFromJSONTyped,
    AnalyticsReportInstanceRelationshipsSegmentsToJSON,
} from './AnalyticsReportInstanceRelationshipsSegments';

/**
 * 
 * @export
 * @interface DiagnosticSignatureRelationships
 */
export interface DiagnosticSignatureRelationships {
    /**
     * 
     * @type {AnalyticsReportInstanceRelationshipsSegments}
     * @memberof DiagnosticSignatureRelationships
     */
    logs?: AnalyticsReportInstanceRelationshipsSegments;
}

/**
 * Check if a given object implements the DiagnosticSignatureRelationships interface.
 */
export function instanceOfDiagnosticSignatureRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiagnosticSignatureRelationshipsFromJSON(json: any): DiagnosticSignatureRelationships {
    return DiagnosticSignatureRelationshipsFromJSONTyped(json, false);
}

export function DiagnosticSignatureRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticSignatureRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'logs': !exists(json, 'logs') ? undefined : AnalyticsReportInstanceRelationshipsSegmentsFromJSON(json['logs']),
    };
}

export function DiagnosticSignatureRelationshipsToJSON(value?: DiagnosticSignatureRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'logs': AnalyticsReportInstanceRelationshipsSegmentsToJSON(value.logs),
    };
}

