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
import type { BetaGroupCreateRequestDataRelationshipsBuilds } from './BetaGroupCreateRequestDataRelationshipsBuilds';
import {
    BetaGroupCreateRequestDataRelationshipsBuildsFromJSON,
    BetaGroupCreateRequestDataRelationshipsBuildsFromJSONTyped,
    BetaGroupCreateRequestDataRelationshipsBuildsToJSON,
} from './BetaGroupCreateRequestDataRelationshipsBuilds';
import type { BetaTesterCreateRequestDataRelationshipsBetaGroups } from './BetaTesterCreateRequestDataRelationshipsBetaGroups';
import {
    BetaTesterCreateRequestDataRelationshipsBetaGroupsFromJSON,
    BetaTesterCreateRequestDataRelationshipsBetaGroupsFromJSONTyped,
    BetaTesterCreateRequestDataRelationshipsBetaGroupsToJSON,
} from './BetaTesterCreateRequestDataRelationshipsBetaGroups';

/**
 * 
 * @export
 * @interface BetaTesterCreateRequestDataRelationships
 */
export interface BetaTesterCreateRequestDataRelationships {
    /**
     * 
     * @type {BetaTesterCreateRequestDataRelationshipsBetaGroups}
     * @memberof BetaTesterCreateRequestDataRelationships
     */
    betaGroups?: BetaTesterCreateRequestDataRelationshipsBetaGroups;
    /**
     * 
     * @type {BetaGroupCreateRequestDataRelationshipsBuilds}
     * @memberof BetaTesterCreateRequestDataRelationships
     */
    builds?: BetaGroupCreateRequestDataRelationshipsBuilds;
}

/**
 * Check if a given object implements the BetaTesterCreateRequestDataRelationships interface.
 */
export function instanceOfBetaTesterCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaTesterCreateRequestDataRelationshipsFromJSON(json: any): BetaTesterCreateRequestDataRelationships {
    return BetaTesterCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function BetaTesterCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'betaGroups': !exists(json, 'betaGroups') ? undefined : BetaTesterCreateRequestDataRelationshipsBetaGroupsFromJSON(json['betaGroups']),
        'builds': !exists(json, 'builds') ? undefined : BetaGroupCreateRequestDataRelationshipsBuildsFromJSON(json['builds']),
    };
}

export function BetaTesterCreateRequestDataRelationshipsToJSON(value?: BetaTesterCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'betaGroups': BetaTesterCreateRequestDataRelationshipsBetaGroupsToJSON(value.betaGroups),
        'builds': BetaGroupCreateRequestDataRelationshipsBuildsToJSON(value.builds),
    };
}

