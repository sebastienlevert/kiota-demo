import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createQuoteFromDiscriminatorValue} from './createQuoteFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {createWorkflowlogFromDiscriminatorValue} from './createWorkflowlogFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Opportunity, Organization, Principalobjectattributeaccess, Processsession, Processstage, Quote, Salesorder, Syncerror, Systemuser, Transactioncurrency, Workflow, Workflowlog} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Opportunitysalesprocess extends Crmbaseentity implements Parsable {
    private __activestageid_value?: string | undefined;
    private __bpf_quoteid_value?: string | undefined;
    private __bpf_salesorderid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __opportunityid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __processid_value?: string | undefined;
    private __quoteid_value?: string | undefined;
    private __salesorderid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _activestageid?: Processstage | undefined;
    private _activestagestartedon?: Date | undefined;
    private _bpf_quoteid?: Quote | undefined;
    private _bpf_salesorderid?: Salesorder | undefined;
    private _businessprocessflowinstanceid?: string | undefined;
    private _completedon?: Date | undefined;
    private _createdbyname?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfbyname?: Systemuser | undefined;
    private _duration?: number | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedbyname?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfbyname?: Systemuser | undefined;
    private _name?: string | undefined;
    private _opportunityid?: Opportunity | undefined;
    private _opportunitysalesprocess_AsyncOperations?: Asyncoperation[] | undefined;
    private _opportunitysalesprocess_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _opportunitysalesprocess_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _opportunitysalesprocess_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _opportunitysalesprocess_ProcessSession?: Processsession[] | undefined;
    private _opportunitySalesProcess_SyncErrors?: Syncerror[] | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _processid?: Workflow | undefined;
    private _quoteid?: Quote | undefined;
    private _salesorderid?: Salesorder | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _workflowlogs_opportunitysalesprocess?: Workflowlog[] | undefined;
    /**
     * Gets the _activestageid_value property value. 
     * @returns a string
     */
    public get _activestageid_value() {
        return this.__activestageid_value;
    };
    /**
     * Sets the _activestageid_value property value. 
     * @param value Value to set for the _activestageid_value property.
     */
    public set _activestageid_value(value: string | undefined) {
        this.__activestageid_value = value;
    };
    /**
     * Gets the _bpf_quoteid_value property value. 
     * @returns a string
     */
    public get _bpf_quoteid_value() {
        return this.__bpf_quoteid_value;
    };
    /**
     * Sets the _bpf_quoteid_value property value. 
     * @param value Value to set for the _bpf_quoteid_value property.
     */
    public set _bpf_quoteid_value(value: string | undefined) {
        this.__bpf_quoteid_value = value;
    };
    /**
     * Gets the _bpf_salesorderid_value property value. 
     * @returns a string
     */
    public get _bpf_salesorderid_value() {
        return this.__bpf_salesorderid_value;
    };
    /**
     * Sets the _bpf_salesorderid_value property value. 
     * @param value Value to set for the _bpf_salesorderid_value property.
     */
    public set _bpf_salesorderid_value(value: string | undefined) {
        this.__bpf_salesorderid_value = value;
    };
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _opportunityid_value property value. 
     * @returns a string
     */
    public get _opportunityid_value() {
        return this.__opportunityid_value;
    };
    /**
     * Sets the _opportunityid_value property value. 
     * @param value Value to set for the _opportunityid_value property.
     */
    public set _opportunityid_value(value: string | undefined) {
        this.__opportunityid_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the _processid_value property value. 
     * @returns a string
     */
    public get _processid_value() {
        return this.__processid_value;
    };
    /**
     * Sets the _processid_value property value. 
     * @param value Value to set for the _processid_value property.
     */
    public set _processid_value(value: string | undefined) {
        this.__processid_value = value;
    };
    /**
     * Gets the _quoteid_value property value. 
     * @returns a string
     */
    public get _quoteid_value() {
        return this.__quoteid_value;
    };
    /**
     * Sets the _quoteid_value property value. 
     * @param value Value to set for the _quoteid_value property.
     */
    public set _quoteid_value(value: string | undefined) {
        this.__quoteid_value = value;
    };
    /**
     * Gets the _salesorderid_value property value. 
     * @returns a string
     */
    public get _salesorderid_value() {
        return this.__salesorderid_value;
    };
    /**
     * Sets the _salesorderid_value property value. 
     * @param value Value to set for the _salesorderid_value property.
     */
    public set _salesorderid_value(value: string | undefined) {
        this.__salesorderid_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the activestageid property value. 
     * @returns a processstage
     */
    public get activestageid() {
        return this._activestageid;
    };
    /**
     * Sets the activestageid property value. 
     * @param value Value to set for the activestageid property.
     */
    public set activestageid(value: Processstage | undefined) {
        this._activestageid = value;
    };
    /**
     * Gets the activestagestartedon property value. 
     * @returns a Date
     */
    public get activestagestartedon() {
        return this._activestagestartedon;
    };
    /**
     * Sets the activestagestartedon property value. 
     * @param value Value to set for the activestagestartedon property.
     */
    public set activestagestartedon(value: Date | undefined) {
        this._activestagestartedon = value;
    };
    /**
     * Gets the bpf_quoteid property value. 
     * @returns a quote
     */
    public get bpf_quoteid() {
        return this._bpf_quoteid;
    };
    /**
     * Sets the bpf_quoteid property value. 
     * @param value Value to set for the bpf_quoteid property.
     */
    public set bpf_quoteid(value: Quote | undefined) {
        this._bpf_quoteid = value;
    };
    /**
     * Gets the bpf_salesorderid property value. 
     * @returns a salesorder
     */
    public get bpf_salesorderid() {
        return this._bpf_salesorderid;
    };
    /**
     * Sets the bpf_salesorderid property value. 
     * @param value Value to set for the bpf_salesorderid property.
     */
    public set bpf_salesorderid(value: Salesorder | undefined) {
        this._bpf_salesorderid = value;
    };
    /**
     * Gets the businessprocessflowinstanceid property value. 
     * @returns a string
     */
    public get businessprocessflowinstanceid() {
        return this._businessprocessflowinstanceid;
    };
    /**
     * Sets the businessprocessflowinstanceid property value. 
     * @param value Value to set for the businessprocessflowinstanceid property.
     */
    public set businessprocessflowinstanceid(value: string | undefined) {
        this._businessprocessflowinstanceid = value;
    };
    /**
     * Gets the completedon property value. 
     * @returns a Date
     */
    public get completedon() {
        return this._completedon;
    };
    /**
     * Sets the completedon property value. 
     * @param value Value to set for the completedon property.
     */
    public set completedon(value: Date | undefined) {
        this._completedon = value;
    };
    /**
     * Instantiates a new opportunitysalesprocess and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdbyname property value. 
     * @returns a systemuser
     */
    public get createdbyname() {
        return this._createdbyname;
    };
    /**
     * Sets the createdbyname property value. 
     * @param value Value to set for the createdbyname property.
     */
    public set createdbyname(value: Systemuser | undefined) {
        this._createdbyname = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get createdonbehalfbyname() {
        return this._createdonbehalfbyname;
    };
    /**
     * Sets the createdonbehalfbyname property value. 
     * @param value Value to set for the createdonbehalfbyname property.
     */
    public set createdonbehalfbyname(value: Systemuser | undefined) {
        this._createdonbehalfbyname = value;
    };
    /**
     * Gets the duration property value. 
     * @returns a integer
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. 
     * @param value Value to set for the duration property.
     */
    public set duration(value: number | undefined) {
        this._duration = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_activestageid_value": (o, n) => { (o as unknown as Opportunitysalesprocess)._activestageid_value = n.getStringValue(); },
            "_bpf_quoteid_value": (o, n) => { (o as unknown as Opportunitysalesprocess)._bpf_quoteid_value = n.getStringValue(); },
            "_bpf_salesorderid_value": (o, n) => { (o as unknown as Opportunitysalesprocess)._bpf_salesorderid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Opportunitysalesprocess)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Opportunitysalesprocess)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Opportunitysalesprocess)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Opportunitysalesprocess)._modifiedonbehalfby_value = n.getStringValue(); },
            "_opportunityid_value": (o, n) => { (o as unknown as Opportunitysalesprocess)._opportunityid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Opportunitysalesprocess)._organizationid_value = n.getStringValue(); },
            "_processid_value": (o, n) => { (o as unknown as Opportunitysalesprocess)._processid_value = n.getStringValue(); },
            "_quoteid_value": (o, n) => { (o as unknown as Opportunitysalesprocess)._quoteid_value = n.getStringValue(); },
            "_salesorderid_value": (o, n) => { (o as unknown as Opportunitysalesprocess)._salesorderid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Opportunitysalesprocess)._transactioncurrencyid_value = n.getStringValue(); },
            "activestageid": (o, n) => { (o as unknown as Opportunitysalesprocess).activestageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "activestagestartedon": (o, n) => { (o as unknown as Opportunitysalesprocess).activestagestartedon = n.getDateValue(); },
            "bpf_quoteid": (o, n) => { (o as unknown as Opportunitysalesprocess).bpf_quoteid = n.getObjectValue<Quote>(createQuoteFromDiscriminatorValue); },
            "bpf_salesorderid": (o, n) => { (o as unknown as Opportunitysalesprocess).bpf_salesorderid = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "businessprocessflowinstanceid": (o, n) => { (o as unknown as Opportunitysalesprocess).businessprocessflowinstanceid = n.getStringValue(); },
            "completedon": (o, n) => { (o as unknown as Opportunitysalesprocess).completedon = n.getDateValue(); },
            "createdbyname": (o, n) => { (o as unknown as Opportunitysalesprocess).createdbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Opportunitysalesprocess).createdon = n.getDateValue(); },
            "createdonbehalfbyname": (o, n) => { (o as unknown as Opportunitysalesprocess).createdonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "duration": (o, n) => { (o as unknown as Opportunitysalesprocess).duration = n.getNumberValue(); },
            "exchangerate": (o, n) => { (o as unknown as Opportunitysalesprocess).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Opportunitysalesprocess).importsequencenumber = n.getNumberValue(); },
            "modifiedbyname": (o, n) => { (o as unknown as Opportunitysalesprocess).modifiedbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Opportunitysalesprocess).modifiedon = n.getDateValue(); },
            "modifiedonbehalfbyname": (o, n) => { (o as unknown as Opportunitysalesprocess).modifiedonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Opportunitysalesprocess).name = n.getStringValue(); },
            "opportunityid": (o, n) => { (o as unknown as Opportunitysalesprocess).opportunityid = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "opportunitysalesprocess_AsyncOperations": (o, n) => { (o as unknown as Opportunitysalesprocess).opportunitysalesprocess_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "opportunitysalesprocess_BulkDeleteFailures": (o, n) => { (o as unknown as Opportunitysalesprocess).opportunitysalesprocess_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "opportunitysalesprocess_MailboxTrackingFolders": (o, n) => { (o as unknown as Opportunitysalesprocess).opportunitysalesprocess_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "opportunitysalesprocess_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Opportunitysalesprocess).opportunitysalesprocess_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "opportunitysalesprocess_ProcessSession": (o, n) => { (o as unknown as Opportunitysalesprocess).opportunitysalesprocess_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "opportunitySalesProcess_SyncErrors": (o, n) => { (o as unknown as Opportunitysalesprocess).opportunitySalesProcess_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Opportunitysalesprocess).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Opportunitysalesprocess).overriddencreatedon = n.getDateValue(); },
            "processid": (o, n) => { (o as unknown as Opportunitysalesprocess).processid = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
            "quoteid": (o, n) => { (o as unknown as Opportunitysalesprocess).quoteid = n.getObjectValue<Quote>(createQuoteFromDiscriminatorValue); },
            "salesorderid": (o, n) => { (o as unknown as Opportunitysalesprocess).salesorderid = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Opportunitysalesprocess).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Opportunitysalesprocess).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Opportunitysalesprocess).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Opportunitysalesprocess).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Opportunitysalesprocess).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Opportunitysalesprocess).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Opportunitysalesprocess).versionnumber = n.getNumberValue(); },
            "workflowlogs_opportunitysalesprocess": (o, n) => { (o as unknown as Opportunitysalesprocess).workflowlogs_opportunitysalesprocess = n.getCollectionOfObjectValues<Workflowlog>(createWorkflowlogFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the modifiedbyname property value. 
     * @returns a systemuser
     */
    public get modifiedbyname() {
        return this._modifiedbyname;
    };
    /**
     * Sets the modifiedbyname property value. 
     * @param value Value to set for the modifiedbyname property.
     */
    public set modifiedbyname(value: Systemuser | undefined) {
        this._modifiedbyname = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfbyname() {
        return this._modifiedonbehalfbyname;
    };
    /**
     * Sets the modifiedonbehalfbyname property value. 
     * @param value Value to set for the modifiedonbehalfbyname property.
     */
    public set modifiedonbehalfbyname(value: Systemuser | undefined) {
        this._modifiedonbehalfbyname = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the opportunityid property value. 
     * @returns a opportunity
     */
    public get opportunityid() {
        return this._opportunityid;
    };
    /**
     * Sets the opportunityid property value. 
     * @param value Value to set for the opportunityid property.
     */
    public set opportunityid(value: Opportunity | undefined) {
        this._opportunityid = value;
    };
    /**
     * Gets the opportunitysalesprocess_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get opportunitysalesprocess_AsyncOperations() {
        return this._opportunitysalesprocess_AsyncOperations;
    };
    /**
     * Sets the opportunitysalesprocess_AsyncOperations property value. 
     * @param value Value to set for the opportunitysalesprocess_AsyncOperations property.
     */
    public set opportunitysalesprocess_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._opportunitysalesprocess_AsyncOperations = value;
    };
    /**
     * Gets the opportunitysalesprocess_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get opportunitysalesprocess_BulkDeleteFailures() {
        return this._opportunitysalesprocess_BulkDeleteFailures;
    };
    /**
     * Sets the opportunitysalesprocess_BulkDeleteFailures property value. 
     * @param value Value to set for the opportunitysalesprocess_BulkDeleteFailures property.
     */
    public set opportunitysalesprocess_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._opportunitysalesprocess_BulkDeleteFailures = value;
    };
    /**
     * Gets the opportunitysalesprocess_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get opportunitysalesprocess_MailboxTrackingFolders() {
        return this._opportunitysalesprocess_MailboxTrackingFolders;
    };
    /**
     * Sets the opportunitysalesprocess_MailboxTrackingFolders property value. 
     * @param value Value to set for the opportunitysalesprocess_MailboxTrackingFolders property.
     */
    public set opportunitysalesprocess_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._opportunitysalesprocess_MailboxTrackingFolders = value;
    };
    /**
     * Gets the opportunitysalesprocess_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get opportunitysalesprocess_PrincipalObjectAttributeAccesses() {
        return this._opportunitysalesprocess_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the opportunitysalesprocess_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the opportunitysalesprocess_PrincipalObjectAttributeAccesses property.
     */
    public set opportunitysalesprocess_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._opportunitysalesprocess_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the opportunitysalesprocess_ProcessSession property value. 
     * @returns a processsession
     */
    public get opportunitysalesprocess_ProcessSession() {
        return this._opportunitysalesprocess_ProcessSession;
    };
    /**
     * Sets the opportunitysalesprocess_ProcessSession property value. 
     * @param value Value to set for the opportunitysalesprocess_ProcessSession property.
     */
    public set opportunitysalesprocess_ProcessSession(value: Processsession[] | undefined) {
        this._opportunitysalesprocess_ProcessSession = value;
    };
    /**
     * Gets the opportunitySalesProcess_SyncErrors property value. 
     * @returns a syncerror
     */
    public get opportunitySalesProcess_SyncErrors() {
        return this._opportunitySalesProcess_SyncErrors;
    };
    /**
     * Sets the opportunitySalesProcess_SyncErrors property value. 
     * @param value Value to set for the OpportunitySalesProcess_SyncErrors property.
     */
    public set opportunitySalesProcess_SyncErrors(value: Syncerror[] | undefined) {
        this._opportunitySalesProcess_SyncErrors = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the processid property value. 
     * @returns a workflow
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: Workflow | undefined) {
        this._processid = value;
    };
    /**
     * Gets the quoteid property value. 
     * @returns a quote
     */
    public get quoteid() {
        return this._quoteid;
    };
    /**
     * Sets the quoteid property value. 
     * @param value Value to set for the quoteid property.
     */
    public set quoteid(value: Quote | undefined) {
        this._quoteid = value;
    };
    /**
     * Gets the salesorderid property value. 
     * @returns a salesorder
     */
    public get salesorderid() {
        return this._salesorderid;
    };
    /**
     * Sets the salesorderid property value. 
     * @param value Value to set for the salesorderid property.
     */
    public set salesorderid(value: Salesorder | undefined) {
        this._salesorderid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_activestageid_value", this._activestageid_value);
        writer.writeStringValue("_bpf_quoteid_value", this._bpf_quoteid_value);
        writer.writeStringValue("_bpf_salesorderid_value", this._bpf_salesorderid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_opportunityid_value", this._opportunityid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_processid_value", this._processid_value);
        writer.writeStringValue("_quoteid_value", this._quoteid_value);
        writer.writeStringValue("_salesorderid_value", this._salesorderid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Processstage>("activestageid", this.activestageid);
        writer.writeDateValue("activestagestartedon", this.activestagestartedon);
        writer.writeObjectValue<Quote>("bpf_quoteid", this.bpf_quoteid);
        writer.writeObjectValue<Salesorder>("bpf_salesorderid", this.bpf_salesorderid);
        writer.writeStringValue("businessprocessflowinstanceid", this.businessprocessflowinstanceid);
        writer.writeDateValue("completedon", this.completedon);
        writer.writeObjectValue<Systemuser>("createdbyname", this.createdbyname);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfbyname", this.createdonbehalfbyname);
        writer.writeNumberValue("duration", this.duration);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedbyname", this.modifiedbyname);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfbyname", this.modifiedonbehalfbyname);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Opportunity>("opportunityid", this.opportunityid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("opportunitysalesprocess_AsyncOperations", this.opportunitysalesprocess_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("opportunitysalesprocess_BulkDeleteFailures", this.opportunitysalesprocess_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("opportunitysalesprocess_MailboxTrackingFolders", this.opportunitysalesprocess_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("opportunitysalesprocess_PrincipalObjectAttributeAccesses", this.opportunitysalesprocess_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("opportunitysalesprocess_ProcessSession", this.opportunitysalesprocess_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("opportunitySalesProcess_SyncErrors", this.opportunitySalesProcess_SyncErrors);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Workflow>("processid", this.processid);
        writer.writeObjectValue<Quote>("quoteid", this.quoteid);
        writer.writeObjectValue<Salesorder>("salesorderid", this.salesorderid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeCollectionOfObjectValues<Workflowlog>("workflowlogs_opportunitysalesprocess", this.workflowlogs_opportunitysalesprocess);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the traversedpath property value. 
     * @returns a string
     */
    public get traversedpath() {
        return this._traversedpath;
    };
    /**
     * Sets the traversedpath property value. 
     * @param value Value to set for the traversedpath property.
     */
    public set traversedpath(value: string | undefined) {
        this._traversedpath = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
    /**
     * Gets the workflowlogs_opportunitysalesprocess property value. 
     * @returns a workflowlog
     */
    public get workflowlogs_opportunitysalesprocess() {
        return this._workflowlogs_opportunitysalesprocess;
    };
    /**
     * Sets the workflowlogs_opportunitysalesprocess property value. 
     * @param value Value to set for the workflowlogs_opportunitysalesprocess property.
     */
    public set workflowlogs_opportunitysalesprocess(value: Workflowlog[] | undefined) {
        this._workflowlogs_opportunitysalesprocess = value;
    };
}
