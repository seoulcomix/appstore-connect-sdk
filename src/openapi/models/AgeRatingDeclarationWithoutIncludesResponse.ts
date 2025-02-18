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
import type { AgeRatingDeclaration } from './AgeRatingDeclaration';
import {
    AgeRatingDeclarationFromJSON,
    AgeRatingDeclarationFromJSONTyped,
    AgeRatingDeclarationToJSON,
} from './AgeRatingDeclaration';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AgeRatingDeclarationWithoutIncludesResponse
 */
export interface AgeRatingDeclarationWithoutIncludesResponse {
    /**
     * 
     * @type {AgeRatingDeclaration}
     * @memberof AgeRatingDeclarationWithoutIncludesResponse
     */
    data: AgeRatingDeclaration;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AgeRatingDeclarationWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AgeRatingDeclarationWithoutIncludesResponse interface.
 */
export function instanceOfAgeRatingDeclarationWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AgeRatingDeclarationWithoutIncludesResponseFromJSON(json: any): AgeRatingDeclarationWithoutIncludesResponse {
    return AgeRatingDeclarationWithoutIncludesResponseFromJSONTyped(json, false);
}

export function AgeRatingDeclarationWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgeRatingDeclarationWithoutIncludesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AgeRatingDeclarationFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AgeRatingDeclarationWithoutIncludesResponseToJSON(value?: AgeRatingDeclarationWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AgeRatingDeclarationToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

