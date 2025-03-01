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
import type { ReviewSubmissionItem } from './ReviewSubmissionItem';
import {
    ReviewSubmissionItemFromJSON,
    ReviewSubmissionItemFromJSONTyped,
    ReviewSubmissionItemToJSON,
} from './ReviewSubmissionItem';
import type { ReviewSubmissionItemsResponseIncludedInner } from './ReviewSubmissionItemsResponseIncludedInner';
import {
    ReviewSubmissionItemsResponseIncludedInnerFromJSON,
    ReviewSubmissionItemsResponseIncludedInnerFromJSONTyped,
    ReviewSubmissionItemsResponseIncludedInnerToJSON,
} from './ReviewSubmissionItemsResponseIncludedInner';

/**
 * 
 * @export
 * @interface ReviewSubmissionItemsResponse
 */
export interface ReviewSubmissionItemsResponse {
    /**
     * 
     * @type {Array<ReviewSubmissionItem>}
     * @memberof ReviewSubmissionItemsResponse
     */
    data: Array<ReviewSubmissionItem>;
    /**
     * 
     * @type {Array<ReviewSubmissionItemsResponseIncludedInner>}
     * @memberof ReviewSubmissionItemsResponse
     */
    included?: Array<ReviewSubmissionItemsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof ReviewSubmissionItemsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof ReviewSubmissionItemsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the ReviewSubmissionItemsResponse interface.
 */
export function instanceOfReviewSubmissionItemsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ReviewSubmissionItemsResponseFromJSON(json: any): ReviewSubmissionItemsResponse {
    return ReviewSubmissionItemsResponseFromJSONTyped(json, false);
}

export function ReviewSubmissionItemsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ReviewSubmissionItemFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(ReviewSubmissionItemsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function ReviewSubmissionItemsResponseToJSON(value?: ReviewSubmissionItemsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(ReviewSubmissionItemToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(ReviewSubmissionItemsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

