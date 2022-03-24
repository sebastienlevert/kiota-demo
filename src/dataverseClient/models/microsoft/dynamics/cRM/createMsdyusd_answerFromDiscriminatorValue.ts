import {Msdyusd_answer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_answerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_answer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_answer();
}
