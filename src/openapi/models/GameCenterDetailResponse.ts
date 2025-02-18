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
import type { GameCenterDetail } from './GameCenterDetail';
import {
    GameCenterDetailFromJSON,
    GameCenterDetailFromJSONTyped,
    GameCenterDetailToJSON,
} from './GameCenterDetail';
import type { GameCenterDetailsResponseIncludedInner } from './GameCenterDetailsResponseIncludedInner';
import {
    GameCenterDetailsResponseIncludedInnerFromJSON,
    GameCenterDetailsResponseIncludedInnerFromJSONTyped,
    GameCenterDetailsResponseIncludedInnerToJSON,
} from './GameCenterDetailsResponseIncludedInner';

/**
 * 
 * @export
 * @interface GameCenterDetailResponse
 */
export interface GameCenterDetailResponse {
    /**
     * 
     * @type {GameCenterDetail}
     * @memberof GameCenterDetailResponse
     */
    data: GameCenterDetail;
    /**
     * 
     * @type {Array<GameCenterDetailsResponseIncludedInner>}
     * @memberof GameCenterDetailResponse
     */
    included?: Array<GameCenterDetailsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterDetailResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterDetailResponse interface.
 */
export function instanceOfGameCenterDetailResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterDetailResponseFromJSON(json: any): GameCenterDetailResponse {
    return GameCenterDetailResponseFromJSONTyped(json, false);
}

export function GameCenterDetailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterDetailFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(GameCenterDetailsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterDetailResponseToJSON(value?: GameCenterDetailResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterDetailToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(GameCenterDetailsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

