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
import type { AppRelationshipsBuilds } from './AppRelationshipsBuilds';
import {
    AppRelationshipsBuildsFromJSON,
    AppRelationshipsBuildsFromJSONTyped,
    AppRelationshipsBuildsToJSON,
} from './AppRelationshipsBuilds';
import type { BetaAppLocalizationRelationshipsApp } from './BetaAppLocalizationRelationshipsApp';
import {
    BetaAppLocalizationRelationshipsAppFromJSON,
    BetaAppLocalizationRelationshipsAppFromJSONTyped,
    BetaAppLocalizationRelationshipsAppToJSON,
} from './BetaAppLocalizationRelationshipsApp';
import type { BetaGroupRelationshipsBetaRecruitmentCriteria } from './BetaGroupRelationshipsBetaRecruitmentCriteria';
import {
    BetaGroupRelationshipsBetaRecruitmentCriteriaFromJSON,
    BetaGroupRelationshipsBetaRecruitmentCriteriaFromJSONTyped,
    BetaGroupRelationshipsBetaRecruitmentCriteriaToJSON,
} from './BetaGroupRelationshipsBetaRecruitmentCriteria';
import type { BetaGroupRelationshipsBetaTesters } from './BetaGroupRelationshipsBetaTesters';
import {
    BetaGroupRelationshipsBetaTestersFromJSON,
    BetaGroupRelationshipsBetaTestersFromJSONTyped,
    BetaGroupRelationshipsBetaTestersToJSON,
} from './BetaGroupRelationshipsBetaTesters';

/**
 * 
 * @export
 * @interface BetaGroupRelationships
 */
export interface BetaGroupRelationships {
    /**
     * 
     * @type {BetaAppLocalizationRelationshipsApp}
     * @memberof BetaGroupRelationships
     */
    app?: BetaAppLocalizationRelationshipsApp;
    /**
     * 
     * @type {AppRelationshipsBuilds}
     * @memberof BetaGroupRelationships
     */
    builds?: AppRelationshipsBuilds;
    /**
     * 
     * @type {BetaGroupRelationshipsBetaTesters}
     * @memberof BetaGroupRelationships
     */
    betaTesters?: BetaGroupRelationshipsBetaTesters;
    /**
     * 
     * @type {BetaGroupRelationshipsBetaRecruitmentCriteria}
     * @memberof BetaGroupRelationships
     */
    betaRecruitmentCriteria?: BetaGroupRelationshipsBetaRecruitmentCriteria;
    /**
     * 
     * @type {AnalyticsReportInstanceRelationshipsSegments}
     * @memberof BetaGroupRelationships
     */
    betaRecruitmentCriterionCompatibleBuildCheck?: AnalyticsReportInstanceRelationshipsSegments;
}

/**
 * Check if a given object implements the BetaGroupRelationships interface.
 */
export function instanceOfBetaGroupRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaGroupRelationshipsFromJSON(json: any): BetaGroupRelationships {
    return BetaGroupRelationshipsFromJSONTyped(json, false);
}

export function BetaGroupRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'app': !exists(json, 'app') ? undefined : BetaAppLocalizationRelationshipsAppFromJSON(json['app']),
        'builds': !exists(json, 'builds') ? undefined : AppRelationshipsBuildsFromJSON(json['builds']),
        'betaTesters': !exists(json, 'betaTesters') ? undefined : BetaGroupRelationshipsBetaTestersFromJSON(json['betaTesters']),
        'betaRecruitmentCriteria': !exists(json, 'betaRecruitmentCriteria') ? undefined : BetaGroupRelationshipsBetaRecruitmentCriteriaFromJSON(json['betaRecruitmentCriteria']),
        'betaRecruitmentCriterionCompatibleBuildCheck': !exists(json, 'betaRecruitmentCriterionCompatibleBuildCheck') ? undefined : AnalyticsReportInstanceRelationshipsSegmentsFromJSON(json['betaRecruitmentCriterionCompatibleBuildCheck']),
    };
}

export function BetaGroupRelationshipsToJSON(value?: BetaGroupRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'app': BetaAppLocalizationRelationshipsAppToJSON(value.app),
        'builds': AppRelationshipsBuildsToJSON(value.builds),
        'betaTesters': BetaGroupRelationshipsBetaTestersToJSON(value.betaTesters),
        'betaRecruitmentCriteria': BetaGroupRelationshipsBetaRecruitmentCriteriaToJSON(value.betaRecruitmentCriteria),
        'betaRecruitmentCriterionCompatibleBuildCheck': AnalyticsReportInstanceRelationshipsSegmentsToJSON(value.betaRecruitmentCriterionCompatibleBuildCheck),
    };
}

