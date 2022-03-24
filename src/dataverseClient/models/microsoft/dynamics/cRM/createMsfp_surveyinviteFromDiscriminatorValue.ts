import {Msfp_surveyinvite} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_surveyinviteFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_surveyinvite {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_surveyinvite();
}
