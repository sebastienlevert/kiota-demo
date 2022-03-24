import {Metric} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMetricFromDiscriminatorValue(parseNode: ParseNode | undefined) : Metric {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Metric();
}
