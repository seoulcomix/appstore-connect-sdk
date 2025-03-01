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
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsApp } from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import type { AnalyticsReportInstanceRelationshipsSegments } from './AnalyticsReportInstanceRelationshipsSegments';
import {
    AnalyticsReportInstanceRelationshipsSegmentsFromJSON,
    AnalyticsReportInstanceRelationshipsSegmentsFromJSONTyped,
    AnalyticsReportInstanceRelationshipsSegmentsToJSON,
} from './AnalyticsReportInstanceRelationshipsSegments';
import type { AppPricePointV3RelationshipsTerritory } from './AppPricePointV3RelationshipsTerritory';
import {
    AppPricePointV3RelationshipsTerritoryFromJSON,
    AppPricePointV3RelationshipsTerritoryFromJSONTyped,
    AppPricePointV3RelationshipsTerritoryToJSON,
} from './AppPricePointV3RelationshipsTerritory';

/**
 * 
 * @export
 * @interface AppPricePointV3Relationships
 */
export interface AppPricePointV3Relationships {
    /**
     * 
     * @type {AlternativeDistributionKeyCreateRequestDataRelationshipsApp}
     * @memberof AppPricePointV3Relationships
     */
    app?: AlternativeDistributionKeyCreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {AnalyticsReportInstanceRelationshipsSegments}
     * @memberof AppPricePointV3Relationships
     */
    equalizations?: AnalyticsReportInstanceRelationshipsSegments;
    /**
     * 
     * @type {AppPricePointV3RelationshipsTerritory}
     * @memberof AppPricePointV3Relationships
     */
    territory?: AppPricePointV3RelationshipsTerritory;
}

/**
 * Check if a given object implements the AppPricePointV3Relationships interface.
 */
export function instanceOfAppPricePointV3Relationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPricePointV3RelationshipsFromJSON(json: any): AppPricePointV3Relationships {
    return AppPricePointV3RelationshipsFromJSONTyped(json, false);
}

export function AppPricePointV3RelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointV3Relationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'app': !exists(json, 'app') ? undefined : AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON(json['app']),
        'equalizations': !exists(json, 'equalizations') ? undefined : AnalyticsReportInstanceRelationshipsSegmentsFromJSON(json['equalizations']),
        'territory': !exists(json, 'territory') ? undefined : AppPricePointV3RelationshipsTerritoryFromJSON(json['territory']),
    };
}

export function AppPricePointV3RelationshipsToJSON(value?: AppPricePointV3Relationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'app': AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON(value.app),
        'equalizations': AnalyticsReportInstanceRelationshipsSegmentsToJSON(value.equalizations),
        'territory': AppPricePointV3RelationshipsTerritoryToJSON(value.territory),
    };
}

