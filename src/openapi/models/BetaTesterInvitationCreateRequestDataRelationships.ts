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
import type { AnalyticsReportRequestCreateRequestDataRelationshipsApp } from './AnalyticsReportRequestCreateRequestDataRelationshipsApp';
import {
    AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSONTyped,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON,
} from './AnalyticsReportRequestCreateRequestDataRelationshipsApp';
import type { BetaTesterInvitationCreateRequestDataRelationshipsBetaTester } from './BetaTesterInvitationCreateRequestDataRelationshipsBetaTester';
import {
    BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFromJSON,
    BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFromJSONTyped,
    BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterToJSON,
} from './BetaTesterInvitationCreateRequestDataRelationshipsBetaTester';

/**
 * 
 * @export
 * @interface BetaTesterInvitationCreateRequestDataRelationships
 */
export interface BetaTesterInvitationCreateRequestDataRelationships {
    /**
     * 
     * @type {BetaTesterInvitationCreateRequestDataRelationshipsBetaTester}
     * @memberof BetaTesterInvitationCreateRequestDataRelationships
     */
    betaTester: BetaTesterInvitationCreateRequestDataRelationshipsBetaTester;
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataRelationshipsApp}
     * @memberof BetaTesterInvitationCreateRequestDataRelationships
     */
    app: AnalyticsReportRequestCreateRequestDataRelationshipsApp;
}

/**
 * Check if a given object implements the BetaTesterInvitationCreateRequestDataRelationships interface.
 */
export function instanceOfBetaTesterInvitationCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "betaTester" in value;
    isInstance = isInstance && "app" in value;

    return isInstance;
}

export function BetaTesterInvitationCreateRequestDataRelationshipsFromJSON(json: any): BetaTesterInvitationCreateRequestDataRelationships {
    return BetaTesterInvitationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function BetaTesterInvitationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterInvitationCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'betaTester': BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFromJSON(json['betaTester']),
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON(json['app']),
    };
}

export function BetaTesterInvitationCreateRequestDataRelationshipsToJSON(value?: BetaTesterInvitationCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'betaTester': BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterToJSON(value.betaTester),
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON(value.app),
    };
}

