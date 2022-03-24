import {Msfp_question} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_questionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_question {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_question();
}
