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
import type { SubscriptionOfferCodeRelationshipsCustomCodesDataInner } from './SubscriptionOfferCodeRelationshipsCustomCodesDataInner';
import {
    SubscriptionOfferCodeRelationshipsCustomCodesDataInnerFromJSON,
    SubscriptionOfferCodeRelationshipsCustomCodesDataInnerFromJSONTyped,
    SubscriptionOfferCodeRelationshipsCustomCodesDataInnerToJSON,
} from './SubscriptionOfferCodeRelationshipsCustomCodesDataInner';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeRelationshipsCustomCodes
 */
export interface SubscriptionOfferCodeRelationshipsCustomCodes {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof SubscriptionOfferCodeRelationshipsCustomCodes
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionOfferCodeRelationshipsCustomCodes
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<SubscriptionOfferCodeRelationshipsCustomCodesDataInner>}
     * @memberof SubscriptionOfferCodeRelationshipsCustomCodes
     */
    data?: Array<SubscriptionOfferCodeRelationshipsCustomCodesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeRelationshipsCustomCodes interface.
 */
export function instanceOfSubscriptionOfferCodeRelationshipsCustomCodes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionOfferCodeRelationshipsCustomCodesFromJSON(json: any): SubscriptionOfferCodeRelationshipsCustomCodes {
    return SubscriptionOfferCodeRelationshipsCustomCodesFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeRelationshipsCustomCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeRelationshipsCustomCodes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(SubscriptionOfferCodeRelationshipsCustomCodesDataInnerFromJSON)),
    };
}

export function SubscriptionOfferCodeRelationshipsCustomCodesToJSON(value?: SubscriptionOfferCodeRelationshipsCustomCodes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(SubscriptionOfferCodeRelationshipsCustomCodesDataInnerToJSON)),
    };
}

