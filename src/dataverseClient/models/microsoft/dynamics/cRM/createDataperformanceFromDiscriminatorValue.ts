import {Dataperformance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataperformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Dataperformance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Dataperformance();
}
