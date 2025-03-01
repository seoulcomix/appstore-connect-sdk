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
import type { CustomerReviewRelationshipsResponse } from './CustomerReviewRelationshipsResponse';
import {
    CustomerReviewRelationshipsResponseFromJSON,
    CustomerReviewRelationshipsResponseFromJSONTyped,
    CustomerReviewRelationshipsResponseToJSON,
} from './CustomerReviewRelationshipsResponse';

/**
 * 
 * @export
 * @interface CustomerReviewRelationships
 */
export interface CustomerReviewRelationships {
    /**
     * 
     * @type {CustomerReviewRelationshipsResponse}
     * @memberof CustomerReviewRelationships
     */
    response?: CustomerReviewRelationshipsResponse;
}

/**
 * Check if a given object implements the CustomerReviewRelationships interface.
 */
export function instanceOfCustomerReviewRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerReviewRelationshipsFromJSON(json: any): CustomerReviewRelationships {
    return CustomerReviewRelationshipsFromJSONTyped(json, false);
}

export function CustomerReviewRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': !exists(json, 'response') ? undefined : CustomerReviewRelationshipsResponseFromJSON(json['response']),
    };
}

export function CustomerReviewRelationshipsToJSON(value?: CustomerReviewRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': CustomerReviewRelationshipsResponseToJSON(value.response),
    };
}

