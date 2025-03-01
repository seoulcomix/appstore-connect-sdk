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
import type { AnalyticsReportRequestRelationshipsReportsDataInner } from './AnalyticsReportRequestRelationshipsReportsDataInner';
import {
    AnalyticsReportRequestRelationshipsReportsDataInnerFromJSON,
    AnalyticsReportRequestRelationshipsReportsDataInnerFromJSONTyped,
    AnalyticsReportRequestRelationshipsReportsDataInnerToJSON,
} from './AnalyticsReportRequestRelationshipsReportsDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AnalyticsReportRequestRelationshipsReports
 */
export interface AnalyticsReportRequestRelationshipsReports {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AnalyticsReportRequestRelationshipsReports
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AnalyticsReportRequestRelationshipsReports
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AnalyticsReportRequestRelationshipsReportsDataInner>}
     * @memberof AnalyticsReportRequestRelationshipsReports
     */
    data?: Array<AnalyticsReportRequestRelationshipsReportsDataInner>;
}

/**
 * Check if a given object implements the AnalyticsReportRequestRelationshipsReports interface.
 */
export function instanceOfAnalyticsReportRequestRelationshipsReports(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AnalyticsReportRequestRelationshipsReportsFromJSON(json: any): AnalyticsReportRequestRelationshipsReports {
    return AnalyticsReportRequestRelationshipsReportsFromJSONTyped(json, false);
}

export function AnalyticsReportRequestRelationshipsReportsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportRequestRelationshipsReports {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AnalyticsReportRequestRelationshipsReportsDataInnerFromJSON)),
    };
}

export function AnalyticsReportRequestRelationshipsReportsToJSON(value?: AnalyticsReportRequestRelationshipsReports | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AnalyticsReportRequestRelationshipsReportsDataInnerToJSON)),
    };
}

