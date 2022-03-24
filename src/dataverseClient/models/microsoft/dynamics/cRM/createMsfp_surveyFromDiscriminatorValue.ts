import {Msfp_survey} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_surveyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_survey {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_survey();
}
