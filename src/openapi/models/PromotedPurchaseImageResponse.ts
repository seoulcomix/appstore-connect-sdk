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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { PromotedPurchase } from './PromotedPurchase';
import {
    PromotedPurchaseFromJSON,
    PromotedPurchaseFromJSONTyped,
    PromotedPurchaseToJSON,
} from './PromotedPurchase';
import type { PromotedPurchaseImage } from './PromotedPurchaseImage';
import {
    PromotedPurchaseImageFromJSON,
    PromotedPurchaseImageFromJSONTyped,
    PromotedPurchaseImageToJSON,
} from './PromotedPurchaseImage';

/**
 * 
 * @export
 * @interface PromotedPurchaseImageResponse
 */
export interface PromotedPurchaseImageResponse {
    /**
     * 
     * @type {PromotedPurchaseImage}
     * @memberof PromotedPurchaseImageResponse
     */
    data: PromotedPurchaseImage;
    /**
     * 
     * @type {Array<PromotedPurchase>}
     * @memberof PromotedPurchaseImageResponse
     */
    included?: Array<PromotedPurchase>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof PromotedPurchaseImageResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the PromotedPurchaseImageResponse interface.
 */
export function instanceOfPromotedPurchaseImageResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function PromotedPurchaseImageResponseFromJSON(json: any): PromotedPurchaseImageResponse {
    return PromotedPurchaseImageResponseFromJSONTyped(json, false);
}

export function PromotedPurchaseImageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': PromotedPurchaseImageFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(PromotedPurchaseFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function PromotedPurchaseImageResponseToJSON(value?: PromotedPurchaseImageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': PromotedPurchaseImageToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(PromotedPurchaseToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

