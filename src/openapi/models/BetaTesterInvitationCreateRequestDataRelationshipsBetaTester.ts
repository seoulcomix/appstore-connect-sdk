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
import type { BetaGroupRelationshipsBetaTestersDataInner } from './BetaGroupRelationshipsBetaTestersDataInner';
import {
    BetaGroupRelationshipsBetaTestersDataInnerFromJSON,
    BetaGroupRelationshipsBetaTestersDataInnerFromJSONTyped,
    BetaGroupRelationshipsBetaTestersDataInnerToJSON,
} from './BetaGroupRelationshipsBetaTestersDataInner';

/**
 * 
 * @export
 * @interface BetaTesterInvitationCreateRequestDataRelationshipsBetaTester
 */
export interface BetaTesterInvitationCreateRequestDataRelationshipsBetaTester {
    /**
     * 
     * @type {BetaGroupRelationshipsBetaTestersDataInner}
     * @memberof BetaTesterInvitationCreateRequestDataRelationshipsBetaTester
     */
    data: BetaGroupRelationshipsBetaTestersDataInner;
}

/**
 * Check if a given object implements the BetaTesterInvitationCreateRequestDataRelationshipsBetaTester interface.
 */
export function instanceOfBetaTesterInvitationCreateRequestDataRelationshipsBetaTester(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFromJSON(json: any): BetaTesterInvitationCreateRequestDataRelationshipsBetaTester {
    return BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFromJSONTyped(json, false);
}

export function BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterInvitationCreateRequestDataRelationshipsBetaTester {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaGroupRelationshipsBetaTestersDataInnerFromJSON(json['data']),
    };
}

export function BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterToJSON(value?: BetaTesterInvitationCreateRequestDataRelationshipsBetaTester | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaGroupRelationshipsBetaTestersDataInnerToJSON(value.data),
    };
}

