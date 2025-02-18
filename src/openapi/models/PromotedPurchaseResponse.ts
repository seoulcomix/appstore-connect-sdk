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
import type { PromotedPurchase } from './PromotedPurchase';
import {
    PromotedPurchaseFromJSON,
    PromotedPurchaseFromJSONTyped,
    PromotedPurchaseToJSON,
} from './PromotedPurchase';
import type { PromotedPurchasesResponseIncludedInner } from './PromotedPurchasesResponseIncludedInner';
import {
    PromotedPurchasesResponseIncludedInnerFromJSON,
    PromotedPurchasesResponseIncludedInnerFromJSONTyped,
    PromotedPurchasesResponseIncludedInnerToJSON,
} from './PromotedPurchasesResponseIncludedInner';

/**
 * 
 * @export
 * @interface PromotedPurchaseResponse
 */
export interface PromotedPurchaseResponse {
    /**
     * 
     * @type {PromotedPurchase}
     * @memberof PromotedPurchaseResponse
     */
    data: PromotedPurchase;
    /**
     * 
     * @type {Array<PromotedPurchasesResponseIncludedInner>}
     * @memberof PromotedPurchaseResponse
     */
    included?: Array<PromotedPurchasesResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof PromotedPurchaseResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the PromotedPurchaseResponse interface.
 */
export function instanceOfPromotedPurchaseResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function PromotedPurchaseResponseFromJSON(json: any): PromotedPurchaseResponse {
    return PromotedPurchaseResponseFromJSONTyped(json, false);
}

export function PromotedPurchaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': PromotedPurchaseFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(PromotedPurchasesResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function PromotedPurchaseResponseToJSON(value?: PromotedPurchaseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': PromotedPurchaseToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(PromotedPurchasesResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

