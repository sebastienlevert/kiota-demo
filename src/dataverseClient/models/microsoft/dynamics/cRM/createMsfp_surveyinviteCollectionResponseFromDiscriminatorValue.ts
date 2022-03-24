import {Msfp_surveyinviteCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_surveyinviteCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_surveyinviteCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_surveyinviteCollectionResponse();
}
