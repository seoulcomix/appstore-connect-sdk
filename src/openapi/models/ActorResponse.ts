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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface ActorResponse
 */
export interface ActorResponse {
    /**
     * 
     * @type {Actor}
     * @memberof ActorResponse
     */
    data: Actor;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof ActorResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the ActorResponse interface.
 */
export function instanceOfActorResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ActorResponseFromJSON(json: any): ActorResponse {
    return ActorResponseFromJSONTyped(json, false);
}

export function ActorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ActorFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function ActorResponseToJSON(value?: ActorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ActorToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

