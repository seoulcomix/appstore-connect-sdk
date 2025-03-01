/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppPreOrderAttributes } from './AppPreOrderAttributes';
import {
    AppPreOrderAttributesFromJSON,
    AppPreOrderAttributesFromJSONTyped,
    AppPreOrderAttributesToJSON,
} from './AppPreOrderAttributes';
import type { AppPreOrderRelationships } from './AppPreOrderRelationships';
import {
    AppPreOrderRelationshipsFromJSON,
    AppPreOrderRelationshipsFromJSONTyped,
    AppPreOrderRelationshipsToJSON,
} from './AppPreOrderRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppPreOrder
 */
export interface AppPreOrder {
    /**
     * 
     * @type {string}
     * @memberof AppPreOrder
     */
    type: AppPreOrderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPreOrder
     */
    id: string;
    /**
     * 
     * @type {AppPreOrderAttributes}
     * @memberof AppPreOrder
     */
    attributes?: AppPreOrderAttributes;
    /**
     * 
     * @type {AppPreOrderRelationships}
     * @memberof AppPreOrder
     */
    relationships?: AppPreOrderRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppPreOrder
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const AppPreOrderTypeEnum = {
    AppPreOrders: 'appPreOrders'
} as const;
export type AppPreOrderTypeEnum = typeof AppPreOrderTypeEnum[keyof typeof AppPreOrderTypeEnum];


/**
 * Check if a given object implements the AppPreOrder interface.
 */
export function instanceOfAppPreOrder(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppPreOrderFromJSON(json: any): AppPreOrder {
    return AppPreOrderFromJSONTyped(json, false);
}

export function AppPreOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreOrder {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppPreOrderAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppPreOrderRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function AppPreOrderToJSON(value?: AppPreOrder | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppPreOrderAttributesToJSON(value.attributes),
        'relationships': AppPreOrderRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

