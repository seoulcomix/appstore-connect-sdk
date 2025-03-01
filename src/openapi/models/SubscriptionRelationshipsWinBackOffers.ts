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
import type { SubscriptionRelationshipsWinBackOffersDataInner } from './SubscriptionRelationshipsWinBackOffersDataInner';
import {
    SubscriptionRelationshipsWinBackOffersDataInnerFromJSON,
    SubscriptionRelationshipsWinBackOffersDataInnerFromJSONTyped,
    SubscriptionRelationshipsWinBackOffersDataInnerToJSON,
} from './SubscriptionRelationshipsWinBackOffersDataInner';

/**
 * 
 * @export
 * @interface SubscriptionRelationshipsWinBackOffers
 */
export interface SubscriptionRelationshipsWinBackOffers {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof SubscriptionRelationshipsWinBackOffers
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionRelationshipsWinBackOffers
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<SubscriptionRelationshipsWinBackOffersDataInner>}
     * @memberof SubscriptionRelationshipsWinBackOffers
     */
    data?: Array<SubscriptionRelationshipsWinBackOffersDataInner>;
}

/**
 * Check if a given object implements the SubscriptionRelationshipsWinBackOffers interface.
 */
export function instanceOfSubscriptionRelationshipsWinBackOffers(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionRelationshipsWinBackOffersFromJSON(json: any): SubscriptionRelationshipsWinBackOffers {
    return SubscriptionRelationshipsWinBackOffersFromJSONTyped(json, false);
}

export function SubscriptionRelationshipsWinBackOffersFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsWinBackOffers {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(SubscriptionRelationshipsWinBackOffersDataInnerFromJSON)),
    };
}

export function SubscriptionRelationshipsWinBackOffersToJSON(value?: SubscriptionRelationshipsWinBackOffers | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(SubscriptionRelationshipsWinBackOffersDataInnerToJSON)),
    };
}

