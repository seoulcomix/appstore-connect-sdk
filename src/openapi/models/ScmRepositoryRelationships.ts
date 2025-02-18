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
import type { CiBuildRunRelationshipsSourceBranchOrTag } from './CiBuildRunRelationshipsSourceBranchOrTag';
import {
    CiBuildRunRelationshipsSourceBranchOrTagFromJSON,
    CiBuildRunRelationshipsSourceBranchOrTagFromJSONTyped,
    CiBuildRunRelationshipsSourceBranchOrTagToJSON,
} from './CiBuildRunRelationshipsSourceBranchOrTag';
import type { ScmRepositoryRelationshipsScmProvider } from './ScmRepositoryRelationshipsScmProvider';
import {
    ScmRepositoryRelationshipsScmProviderFromJSON,
    ScmRepositoryRelationshipsScmProviderFromJSONTyped,
    ScmRepositoryRelationshipsScmProviderToJSON,
} from './ScmRepositoryRelationshipsScmProvider';

/**
 * 
 * @export
 * @interface ScmRepositoryRelationships
 */
export interface ScmRepositoryRelationships {
    /**
     * 
     * @type {ScmRepositoryRelationshipsScmProvider}
     * @memberof ScmRepositoryRelationships
     */
    scmProvider?: ScmRepositoryRelationshipsScmProvider;
    /**
     * 
     * @type {CiBuildRunRelationshipsSourceBranchOrTag}
     * @memberof ScmRepositoryRelationships
     */
    defaultBranch?: CiBuildRunRelationshipsSourceBranchOrTag;
    /**
     * 
     * @type {AnalyticsReportInstanceRelationshipsSegments}
     * @memberof ScmRepositoryRelationships
     */
    gitReferences?: AnalyticsReportInstanceRelationshipsSegments;
    /**
     * 
     * @type {AnalyticsReportInstanceRelationshipsSegments}
     * @memberof ScmRepositoryRelationships
     */
    pullRequests?: AnalyticsReportInstanceRelationshipsSegments;
}

/**
 * Check if a given object implements the ScmRepositoryRelationships interface.
 */
export function instanceOfScmRepositoryRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScmRepositoryRelationshipsFromJSON(json: any): ScmRepositoryRelationships {
    return ScmRepositoryRelationshipsFromJSONTyped(json, false);
}

export function ScmRepositoryRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmRepositoryRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scmProvider': !exists(json, 'scmProvider') ? undefined : ScmRepositoryRelationshipsScmProviderFromJSON(json['scmProvider']),
        'defaultBranch': !exists(json, 'defaultBranch') ? undefined : CiBuildRunRelationshipsSourceBranchOrTagFromJSON(json['defaultBranch']),
        'gitReferences': !exists(json, 'gitReferences') ? undefined : AnalyticsReportInstanceRelationshipsSegmentsFromJSON(json['gitReferences']),
        'pullRequests': !exists(json, 'pullRequests') ? undefined : AnalyticsReportInstanceRelationshipsSegmentsFromJSON(json['pullRequests']),
    };
}

export function ScmRepositoryRelationshipsToJSON(value?: ScmRepositoryRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scmProvider': ScmRepositoryRelationshipsScmProviderToJSON(value.scmProvider),
        'defaultBranch': CiBuildRunRelationshipsSourceBranchOrTagToJSON(value.defaultBranch),
        'gitReferences': AnalyticsReportInstanceRelationshipsSegmentsToJSON(value.gitReferences),
        'pullRequests': AnalyticsReportInstanceRelationshipsSegmentsToJSON(value.pullRequests),
    };
}

