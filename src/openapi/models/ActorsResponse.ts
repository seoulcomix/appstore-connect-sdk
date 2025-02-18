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
import type { Actor } from './Actor';
import {
    ActorFromJSON,
    ActorFromJSONTyped,
    ActorToJSON,
} from './Actor';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface ActorsResponse
 */
export interface ActorsResponse {
    /**
     * 
     * @type {Array<Actor>}
     * @memberof ActorsResponse
     */
    data: Array<Actor>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof ActorsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof ActorsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the ActorsResponse interface.
 */
export function instanceOfActorsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ActorsResponseFromJSON(json: any): ActorsResponse {
    return ActorsResponseFromJSONTyped(json, false);
}

export function ActorsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActorsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ActorFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function ActorsResponseToJSON(value?: ActorsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(ActorToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

