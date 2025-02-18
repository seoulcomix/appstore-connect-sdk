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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { Nomination } from './Nomination';
import {
    NominationFromJSON,
    NominationFromJSONTyped,
    NominationToJSON,
} from './Nomination';
import type { NominationsResponseIncludedInner } from './NominationsResponseIncludedInner';
import {
    NominationsResponseIncludedInnerFromJSON,
    NominationsResponseIncludedInnerFromJSONTyped,
    NominationsResponseIncludedInnerToJSON,
} from './NominationsResponseIncludedInner';

/**
 * 
 * @export
 * @interface NominationResponse
 */
export interface NominationResponse {
    /**
     * 
     * @type {Nomination}
     * @memberof NominationResponse
     */
    data: Nomination;
    /**
     * 
     * @type {Array<NominationsResponseIncludedInner>}
     * @memberof NominationResponse
     */
    included?: Array<NominationsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof NominationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the NominationResponse interface.
 */
export function instanceOfNominationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function NominationResponseFromJSON(json: any): NominationResponse {
    return NominationResponseFromJSONTyped(json, false);
}

export function NominationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NominationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': NominationFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(NominationsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function NominationResponseToJSON(value?: NominationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': NominationToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(NominationsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

