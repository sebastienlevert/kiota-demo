import {Msfp_surveyresponseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_surveyresponseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_surveyresponseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_surveyresponseCollectionResponse();
}
