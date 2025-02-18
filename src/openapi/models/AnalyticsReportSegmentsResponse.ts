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
import type { AnalyticsReportSegment } from './AnalyticsReportSegment';
import {
    AnalyticsReportSegmentFromJSON,
    AnalyticsReportSegmentFromJSONTyped,
    AnalyticsReportSegmentToJSON,
} from './AnalyticsReportSegment';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AnalyticsReportSegmentsResponse
 */
export interface AnalyticsReportSegmentsResponse {
    /**
     * 
     * @type {Array<AnalyticsReportSegment>}
     * @memberof AnalyticsReportSegmentsResponse
     */
    data: Array<AnalyticsReportSegment>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AnalyticsReportSegmentsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AnalyticsReportSegmentsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AnalyticsReportSegmentsResponse interface.
 */
export function instanceOfAnalyticsReportSegmentsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AnalyticsReportSegmentsResponseFromJSON(json: any): AnalyticsReportSegmentsResponse {
    return AnalyticsReportSegmentsResponseFromJSONTyped(json, false);
}

export function AnalyticsReportSegmentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportSegmentsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AnalyticsReportSegmentFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AnalyticsReportSegmentsResponseToJSON(value?: AnalyticsReportSegmentsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AnalyticsReportSegmentToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

