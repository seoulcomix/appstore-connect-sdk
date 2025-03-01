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
import type { InAppPurchaseRelationshipsApps } from './InAppPurchaseRelationshipsApps';
import {
    InAppPurchaseRelationshipsAppsFromJSON,
    InAppPurchaseRelationshipsAppsFromJSONTyped,
    InAppPurchaseRelationshipsAppsToJSON,
} from './InAppPurchaseRelationshipsApps';
import type { NominationRelationshipsCreatedByActor } from './NominationRelationshipsCreatedByActor';
import {
    NominationRelationshipsCreatedByActorFromJSON,
    NominationRelationshipsCreatedByActorFromJSONTyped,
    NominationRelationshipsCreatedByActorToJSON,
} from './NominationRelationshipsCreatedByActor';
import type { NominationRelationshipsInAppEvents } from './NominationRelationshipsInAppEvents';
import {
    NominationRelationshipsInAppEventsFromJSON,
    NominationRelationshipsInAppEventsFromJSONTyped,
    NominationRelationshipsInAppEventsToJSON,
} from './NominationRelationshipsInAppEvents';
import type { NominationRelationshipsSupportedTerritories } from './NominationRelationshipsSupportedTerritories';
import {
    NominationRelationshipsSupportedTerritoriesFromJSON,
    NominationRelationshipsSupportedTerritoriesFromJSONTyped,
    NominationRelationshipsSupportedTerritoriesToJSON,
} from './NominationRelationshipsSupportedTerritories';

/**
 * 
 * @export
 * @interface NominationRelationships
 */
export interface NominationRelationships {
    /**
     * 
     * @type {InAppPurchaseRelationshipsApps}
     * @memberof NominationRelationships
     */
    relatedApps?: InAppPurchaseRelationshipsApps;
    /**
     * 
     * @type {NominationRelationshipsCreatedByActor}
     * @memberof NominationRelationships
     */
    createdByActor?: NominationRelationshipsCreatedByActor;
    /**
     * 
     * @type {NominationRelationshipsCreatedByActor}
     * @memberof NominationRelationships
     */
    lastModifiedByActor?: NominationRelationshipsCreatedByActor;
    /**
     * 
     * @type {NominationRelationshipsCreatedByActor}
     * @memberof NominationRelationships
     */
    submittedByActor?: NominationRelationshipsCreatedByActor;
    /**
     * 
     * @type {NominationRelationshipsInAppEvents}
     * @memberof NominationRelationships
     */
    inAppEvents?: NominationRelationshipsInAppEvents;
    /**
     * 
     * @type {NominationRelationshipsSupportedTerritories}
     * @memberof NominationRelationships
     */
    supportedTerritories?: NominationRelationshipsSupportedTerritories;
}

/**
 * Check if a given object implements the NominationRelationships interface.
 */
export function instanceOfNominationRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NominationRelationshipsFromJSON(json: any): NominationRelationships {
    return NominationRelationshipsFromJSONTyped(json, false);
}

export function NominationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NominationRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'relatedApps': !exists(json, 'relatedApps') ? undefined : InAppPurchaseRelationshipsAppsFromJSON(json['relatedApps']),
        'createdByActor': !exists(json, 'createdByActor') ? undefined : NominationRelationshipsCreatedByActorFromJSON(json['createdByActor']),
        'lastModifiedByActor': !exists(json, 'lastModifiedByActor') ? undefined : NominationRelationshipsCreatedByActorFromJSON(json['lastModifiedByActor']),
        'submittedByActor': !exists(json, 'submittedByActor') ? undefined : NominationRelationshipsCreatedByActorFromJSON(json['submittedByActor']),
        'inAppEvents': !exists(json, 'inAppEvents') ? undefined : NominationRelationshipsInAppEventsFromJSON(json['inAppEvents']),
        'supportedTerritories': !exists(json, 'supportedTerritories') ? undefined : NominationRelationshipsSupportedTerritoriesFromJSON(json['supportedTerritories']),
    };
}

export function NominationRelationshipsToJSON(value?: NominationRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'relatedApps': InAppPurchaseRelationshipsAppsToJSON(value.relatedApps),
        'createdByActor': NominationRelationshipsCreatedByActorToJSON(value.createdByActor),
        'lastModifiedByActor': NominationRelationshipsCreatedByActorToJSON(value.lastModifiedByActor),
        'submittedByActor': NominationRelationshipsCreatedByActorToJSON(value.submittedByActor),
        'inAppEvents': NominationRelationshipsInAppEventsToJSON(value.inAppEvents),
        'supportedTerritories': NominationRelationshipsSupportedTerritoriesToJSON(value.supportedTerritories),
    };
}

