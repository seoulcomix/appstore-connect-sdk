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
import type { Build } from './Build';
import {
    BuildFromJSON,
    BuildFromJSONTyped,
    BuildToJSON,
} from './Build';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface BuildWithoutIncludesResponse
 */
export interface BuildWithoutIncludesResponse {
    /**
     * 
     * @type {Build}
     * @memberof BuildWithoutIncludesResponse
     */
    data: Build;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BuildWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BuildWithoutIncludesResponse interface.
 */
export function instanceOfBuildWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BuildWithoutIncludesResponseFromJSON(json: any): BuildWithoutIncludesResponse {
    return BuildWithoutIncludesResponseFromJSONTyped(json, false);
}

export function BuildWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildWithoutIncludesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BuildFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BuildWithoutIncludesResponseToJSON(value?: BuildWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BuildToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

