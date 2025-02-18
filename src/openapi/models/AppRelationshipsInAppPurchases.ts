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
import type { AppRelationshipsInAppPurchasesDataInner } from './AppRelationshipsInAppPurchasesDataInner';
import {
    AppRelationshipsInAppPurchasesDataInnerFromJSON,
    AppRelationshipsInAppPurchasesDataInnerFromJSONTyped,
    AppRelationshipsInAppPurchasesDataInnerToJSON,
} from './AppRelationshipsInAppPurchasesDataInner';
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
 * @interface AppRelationshipsInAppPurchases
 */
export interface AppRelationshipsInAppPurchases {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppRelationshipsInAppPurchases
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppRelationshipsInAppPurchases
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppRelationshipsInAppPurchasesDataInner>}
     * @memberof AppRelationshipsInAppPurchases
     */
    data?: Array<AppRelationshipsInAppPurchasesDataInner>;
}

/**
 * Check if a given object implements the AppRelationshipsInAppPurchases interface.
 */
export function instanceOfAppRelationshipsInAppPurchases(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppRelationshipsInAppPurchasesFromJSON(json: any): AppRelationshipsInAppPurchases {
    return AppRelationshipsInAppPurchasesFromJSONTyped(json, false);
}

export function AppRelationshipsInAppPurchasesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsInAppPurchases {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppRelationshipsInAppPurchasesDataInnerFromJSON)),
    };
}

export function AppRelationshipsInAppPurchasesToJSON(value?: AppRelationshipsInAppPurchases | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppRelationshipsInAppPurchasesDataInnerToJSON)),
    };
}

