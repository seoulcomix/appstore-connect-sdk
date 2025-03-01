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
import type { CustomerReview } from './CustomerReview';
import {
    CustomerReviewFromJSON,
    CustomerReviewFromJSONTyped,
    CustomerReviewToJSON,
} from './CustomerReview';
import type { CustomerReviewResponseV1 } from './CustomerReviewResponseV1';
import {
    CustomerReviewResponseV1FromJSON,
    CustomerReviewResponseV1FromJSONTyped,
    CustomerReviewResponseV1ToJSON,
} from './CustomerReviewResponseV1';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface CustomerReviewResponseV1Response
 */
export interface CustomerReviewResponseV1Response {
    /**
     * 
     * @type {CustomerReviewResponseV1}
     * @memberof CustomerReviewResponseV1Response
     */
    data: CustomerReviewResponseV1;
    /**
     * 
     * @type {Array<CustomerReview>}
     * @memberof CustomerReviewResponseV1Response
     */
    included?: Array<CustomerReview>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof CustomerReviewResponseV1Response
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the CustomerReviewResponseV1Response interface.
 */
export function instanceOfCustomerReviewResponseV1Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CustomerReviewResponseV1ResponseFromJSON(json: any): CustomerReviewResponseV1Response {
    return CustomerReviewResponseV1ResponseFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CustomerReviewResponseV1FromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(CustomerReviewFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function CustomerReviewResponseV1ResponseToJSON(value?: CustomerReviewResponseV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CustomerReviewResponseV1ToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(CustomerReviewToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

