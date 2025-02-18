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
 * @interface AgeRatingDeclarationResponse
 */
export interface AgeRatingDeclarationResponse {
    /**
     * 
     * @type {AgeRatingDeclaration}
     * @memberof AgeRatingDeclarationResponse
     */
    data: AgeRatingDeclaration;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AgeRatingDeclarationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AgeRatingDeclarationResponse interface.
 */
export function instanceOfAgeRatingDeclarationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AgeRatingDeclarationResponseFromJSON(json: any): AgeRatingDeclarationResponse {
    return AgeRatingDeclarationResponseFromJSONTyped(json, false);
}

export function AgeRatingDeclarationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgeRatingDeclarationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AgeRatingDeclarationFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AgeRatingDeclarationResponseToJSON(value?: AgeRatingDeclarationResponse | null): any {
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

