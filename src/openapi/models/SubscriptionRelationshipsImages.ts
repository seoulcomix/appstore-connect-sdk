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
import type { SubscriptionRelationshipsImagesDataInner } from './SubscriptionRelationshipsImagesDataInner';
import {
    SubscriptionRelationshipsImagesDataInnerFromJSON,
    SubscriptionRelationshipsImagesDataInnerFromJSONTyped,
    SubscriptionRelationshipsImagesDataInnerToJSON,
} from './SubscriptionRelationshipsImagesDataInner';

/**
 * 
 * @export
 * @interface SubscriptionRelationshipsImages
 */
export interface SubscriptionRelationshipsImages {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof SubscriptionRelationshipsImages
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionRelationshipsImages
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<SubscriptionRelationshipsImagesDataInner>}
     * @memberof SubscriptionRelationshipsImages
     */
    data?: Array<SubscriptionRelationshipsImagesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionRelationshipsImages interface.
 */
export function instanceOfSubscriptionRelationshipsImages(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionRelationshipsImagesFromJSON(json: any): SubscriptionRelationshipsImages {
    return SubscriptionRelationshipsImagesFromJSONTyped(json, false);
}

export function SubscriptionRelationshipsImagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsImages {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(SubscriptionRelationshipsImagesDataInnerFromJSON)),
    };
}

export function SubscriptionRelationshipsImagesToJSON(value?: SubscriptionRelationshipsImages | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(SubscriptionRelationshipsImagesDataInnerToJSON)),
    };
}

