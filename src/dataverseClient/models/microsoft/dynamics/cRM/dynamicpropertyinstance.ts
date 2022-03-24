import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDynamicpropertyFromDiscriminatorValue} from './createDynamicpropertyFromDiscriminatorValue';
import {createInvoicedetailFromDiscriminatorValue} from './createInvoicedetailFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOpportunityproductFromDiscriminatorValue} from './createOpportunityproductFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createQuotedetailFromDiscriminatorValue} from './createQuotedetailFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Dynamicproperty, Invoicedetail, Mailboxtrackingfolder, Opportunityproduct, Principal, Principalobjectattributeaccess, Quotedetail, Salesorderdetail, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Dynamicpropertyinstance extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __dynamicpropertyid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _dmtimportstate?: number | undefined;
    private _dynamicpropertyid?: Dynamicproperty | undefined;
    private _dynamicpropertyinstance_AsyncOperations?: Asyncoperation[] | undefined;
    private _dynamicpropertyinstance_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _dynamicpropertyinstance_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _dynamicpropertyinstance_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _dynamicpropertyinstance_SyncErrors?: Syncerror[] | undefined;
    private _dynamicpropertyinstanceid?: string | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _regardingobjectid_invoicedetail?: Invoicedetail | undefined;
    private _regardingobjectid_opportunityproduct?: Opportunityproduct | undefined;
    private _regardingobjectid_quotedetail?: Quotedetail | undefined;
    private _regardingobjectid_salesorderdetail?: Salesorderdetail | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _validationstatus?: boolean | undefined;
    private _valuedecimal?: number | undefined;
    private _valuedouble?: number | undefined;
    private _valueinteger?: number | undefined;
    private _valuestring?: string | undefined;
    private _versionnumber?: number | undefined;
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
     * Gets the _dynamicpropertyid_value property value. 
     * @returns a string
     */
    public get _dynamicpropertyid_value() {
        return this.__dynamicpropertyid_value;
    };
    /**
     * Sets the _dynamicpropertyid_value property value. 
     * @param value Value to set for the _dynamicpropertyid_value property.
     */
    public set _dynamicpropertyid_value(value: string | undefined) {
        this.__dynamicpropertyid_value = value;
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
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
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
     * Instantiates a new dynamicpropertyinstance and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
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
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the dmtimportstate property value. 
     * @returns a integer
     */
    public get dmtimportstate() {
        return this._dmtimportstate;
    };
    /**
     * Sets the dmtimportstate property value. 
     * @param value Value to set for the dmtimportstate property.
     */
    public set dmtimportstate(value: number | undefined) {
        this._dmtimportstate = value;
    };
    /**
     * Gets the dynamicpropertyid property value. 
     * @returns a dynamicproperty
     */
    public get dynamicpropertyid() {
        return this._dynamicpropertyid;
    };
    /**
     * Sets the dynamicpropertyid property value. 
     * @param value Value to set for the dynamicpropertyid property.
     */
    public set dynamicpropertyid(value: Dynamicproperty | undefined) {
        this._dynamicpropertyid = value;
    };
    /**
     * Gets the dynamicpropertyinstance_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get dynamicpropertyinstance_AsyncOperations() {
        return this._dynamicpropertyinstance_AsyncOperations;
    };
    /**
     * Sets the dynamicpropertyinstance_AsyncOperations property value. 
     * @param value Value to set for the dynamicpropertyinstance_AsyncOperations property.
     */
    public set dynamicpropertyinstance_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._dynamicpropertyinstance_AsyncOperations = value;
    };
    /**
     * Gets the dynamicpropertyinstance_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get dynamicpropertyinstance_BulkDeleteFailures() {
        return this._dynamicpropertyinstance_BulkDeleteFailures;
    };
    /**
     * Sets the dynamicpropertyinstance_BulkDeleteFailures property value. 
     * @param value Value to set for the dynamicpropertyinstance_BulkDeleteFailures property.
     */
    public set dynamicpropertyinstance_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._dynamicpropertyinstance_BulkDeleteFailures = value;
    };
    /**
     * Gets the dynamicpropertyinstance_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get dynamicpropertyinstance_MailboxTrackingFolders() {
        return this._dynamicpropertyinstance_MailboxTrackingFolders;
    };
    /**
     * Sets the dynamicpropertyinstance_MailboxTrackingFolders property value. 
     * @param value Value to set for the dynamicpropertyinstance_MailboxTrackingFolders property.
     */
    public set dynamicpropertyinstance_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._dynamicpropertyinstance_MailboxTrackingFolders = value;
    };
    /**
     * Gets the dynamicpropertyinstance_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get dynamicpropertyinstance_PrincipalObjectAttributeAccesses() {
        return this._dynamicpropertyinstance_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the dynamicpropertyinstance_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the dynamicpropertyinstance_PrincipalObjectAttributeAccesses property.
     */
    public set dynamicpropertyinstance_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._dynamicpropertyinstance_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the dynamicpropertyinstance_SyncErrors property value. 
     * @returns a syncerror
     */
    public get dynamicpropertyinstance_SyncErrors() {
        return this._dynamicpropertyinstance_SyncErrors;
    };
    /**
     * Sets the dynamicpropertyinstance_SyncErrors property value. 
     * @param value Value to set for the dynamicpropertyinstance_SyncErrors property.
     */
    public set dynamicpropertyinstance_SyncErrors(value: Syncerror[] | undefined) {
        this._dynamicpropertyinstance_SyncErrors = value;
    };
    /**
     * Gets the dynamicpropertyinstanceid property value. 
     * @returns a string
     */
    public get dynamicpropertyinstanceid() {
        return this._dynamicpropertyinstanceid;
    };
    /**
     * Sets the dynamicpropertyinstanceid property value. 
     * @param value Value to set for the dynamicpropertyinstanceid property.
     */
    public set dynamicpropertyinstanceid(value: string | undefined) {
        this._dynamicpropertyinstanceid = value;
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
            "_createdby_value": (o, n) => { (o as unknown as Dynamicpropertyinstance)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Dynamicpropertyinstance)._createdonbehalfby_value = n.getStringValue(); },
            "_dynamicpropertyid_value": (o, n) => { (o as unknown as Dynamicpropertyinstance)._dynamicpropertyid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Dynamicpropertyinstance)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Dynamicpropertyinstance)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Dynamicpropertyinstance)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Dynamicpropertyinstance)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Dynamicpropertyinstance)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Dynamicpropertyinstance)._owninguser_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Dynamicpropertyinstance)._regardingobjectid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Dynamicpropertyinstance)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Dynamicpropertyinstance).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Dynamicpropertyinstance).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Dynamicpropertyinstance).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "dmtimportstate": (o, n) => { (o as unknown as Dynamicpropertyinstance).dmtimportstate = n.getNumberValue(); },
            "dynamicpropertyid": (o, n) => { (o as unknown as Dynamicpropertyinstance).dynamicpropertyid = n.getObjectValue<Dynamicproperty>(createDynamicpropertyFromDiscriminatorValue); },
            "dynamicpropertyinstance_AsyncOperations": (o, n) => { (o as unknown as Dynamicpropertyinstance).dynamicpropertyinstance_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "dynamicpropertyinstance_BulkDeleteFailures": (o, n) => { (o as unknown as Dynamicpropertyinstance).dynamicpropertyinstance_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "dynamicpropertyinstance_MailboxTrackingFolders": (o, n) => { (o as unknown as Dynamicpropertyinstance).dynamicpropertyinstance_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "dynamicpropertyinstance_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Dynamicpropertyinstance).dynamicpropertyinstance_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "dynamicpropertyinstance_SyncErrors": (o, n) => { (o as unknown as Dynamicpropertyinstance).dynamicpropertyinstance_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "dynamicpropertyinstanceid": (o, n) => { (o as unknown as Dynamicpropertyinstance).dynamicpropertyinstanceid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Dynamicpropertyinstance).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Dynamicpropertyinstance).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Dynamicpropertyinstance).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Dynamicpropertyinstance).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Dynamicpropertyinstance).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Dynamicpropertyinstance).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Dynamicpropertyinstance).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Dynamicpropertyinstance).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Dynamicpropertyinstance).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Dynamicpropertyinstance).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Dynamicpropertyinstance).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "regardingobjectid_invoicedetail": (o, n) => { (o as unknown as Dynamicpropertyinstance).regardingobjectid_invoicedetail = n.getObjectValue<Invoicedetail>(createInvoicedetailFromDiscriminatorValue); },
            "regardingobjectid_opportunityproduct": (o, n) => { (o as unknown as Dynamicpropertyinstance).regardingobjectid_opportunityproduct = n.getObjectValue<Opportunityproduct>(createOpportunityproductFromDiscriminatorValue); },
            "regardingobjectid_quotedetail": (o, n) => { (o as unknown as Dynamicpropertyinstance).regardingobjectid_quotedetail = n.getObjectValue<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "regardingobjectid_salesorderdetail": (o, n) => { (o as unknown as Dynamicpropertyinstance).regardingobjectid_salesorderdetail = n.getObjectValue<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Dynamicpropertyinstance).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Dynamicpropertyinstance).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Dynamicpropertyinstance).utcconversiontimezonecode = n.getNumberValue(); },
            "validationstatus": (o, n) => { (o as unknown as Dynamicpropertyinstance).validationstatus = n.getBooleanValue(); },
            "valuedecimal": (o, n) => { (o as unknown as Dynamicpropertyinstance).valuedecimal = n.getNumberValue(); },
            "valuedouble": (o, n) => { (o as unknown as Dynamicpropertyinstance).valuedouble = n.getNumberValue(); },
            "valueinteger": (o, n) => { (o as unknown as Dynamicpropertyinstance).valueinteger = n.getNumberValue(); },
            "valuestring": (o, n) => { (o as unknown as Dynamicpropertyinstance).valuestring = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Dynamicpropertyinstance).versionnumber = n.getNumberValue(); },
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
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
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
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the regardingobjectid_invoicedetail property value. 
     * @returns a invoicedetail
     */
    public get regardingobjectid_invoicedetail() {
        return this._regardingobjectid_invoicedetail;
    };
    /**
     * Sets the regardingobjectid_invoicedetail property value. 
     * @param value Value to set for the regardingobjectid_invoicedetail property.
     */
    public set regardingobjectid_invoicedetail(value: Invoicedetail | undefined) {
        this._regardingobjectid_invoicedetail = value;
    };
    /**
     * Gets the regardingobjectid_opportunityproduct property value. 
     * @returns a opportunityproduct
     */
    public get regardingobjectid_opportunityproduct() {
        return this._regardingobjectid_opportunityproduct;
    };
    /**
     * Sets the regardingobjectid_opportunityproduct property value. 
     * @param value Value to set for the regardingobjectid_opportunityproduct property.
     */
    public set regardingobjectid_opportunityproduct(value: Opportunityproduct | undefined) {
        this._regardingobjectid_opportunityproduct = value;
    };
    /**
     * Gets the regardingobjectid_quotedetail property value. 
     * @returns a quotedetail
     */
    public get regardingobjectid_quotedetail() {
        return this._regardingobjectid_quotedetail;
    };
    /**
     * Sets the regardingobjectid_quotedetail property value. 
     * @param value Value to set for the regardingobjectid_quotedetail property.
     */
    public set regardingobjectid_quotedetail(value: Quotedetail | undefined) {
        this._regardingobjectid_quotedetail = value;
    };
    /**
     * Gets the regardingobjectid_salesorderdetail property value. 
     * @returns a salesorderdetail
     */
    public get regardingobjectid_salesorderdetail() {
        return this._regardingobjectid_salesorderdetail;
    };
    /**
     * Sets the regardingobjectid_salesorderdetail property value. 
     * @param value Value to set for the regardingobjectid_salesorderdetail property.
     */
    public set regardingobjectid_salesorderdetail(value: Salesorderdetail | undefined) {
        this._regardingobjectid_salesorderdetail = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_dynamicpropertyid_value", this._dynamicpropertyid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("dmtimportstate", this.dmtimportstate);
        writer.writeObjectValue<Dynamicproperty>("dynamicpropertyid", this.dynamicpropertyid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("dynamicpropertyinstance_AsyncOperations", this.dynamicpropertyinstance_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("dynamicpropertyinstance_BulkDeleteFailures", this.dynamicpropertyinstance_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("dynamicpropertyinstance_MailboxTrackingFolders", this.dynamicpropertyinstance_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("dynamicpropertyinstance_PrincipalObjectAttributeAccesses", this.dynamicpropertyinstance_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("dynamicpropertyinstance_SyncErrors", this.dynamicpropertyinstance_SyncErrors);
        writer.writeStringValue("dynamicpropertyinstanceid", this.dynamicpropertyinstanceid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Invoicedetail>("regardingobjectid_invoicedetail", this.regardingobjectid_invoicedetail);
        writer.writeObjectValue<Opportunityproduct>("regardingobjectid_opportunityproduct", this.regardingobjectid_opportunityproduct);
        writer.writeObjectValue<Quotedetail>("regardingobjectid_quotedetail", this.regardingobjectid_quotedetail);
        writer.writeObjectValue<Salesorderdetail>("regardingobjectid_salesorderdetail", this.regardingobjectid_salesorderdetail);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeBooleanValue("validationstatus", this.validationstatus);
        writer.writeNumberValue("valuedecimal", this.valuedecimal);
        writer.writeNumberValue("valuedouble", this.valuedouble);
        writer.writeNumberValue("valueinteger", this.valueinteger);
        writer.writeStringValue("valuestring", this.valuestring);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
     * Gets the validationstatus property value. 
     * @returns a boolean
     */
    public get validationstatus() {
        return this._validationstatus;
    };
    /**
     * Sets the validationstatus property value. 
     * @param value Value to set for the validationstatus property.
     */
    public set validationstatus(value: boolean | undefined) {
        this._validationstatus = value;
    };
    /**
     * Gets the valuedecimal property value. 
     * @returns a int64
     */
    public get valuedecimal() {
        return this._valuedecimal;
    };
    /**
     * Sets the valuedecimal property value. 
     * @param value Value to set for the valuedecimal property.
     */
    public set valuedecimal(value: number | undefined) {
        this._valuedecimal = value;
    };
    /**
     * Gets the valuedouble property value. 
     * @returns a double
     */
    public get valuedouble() {
        return this._valuedouble;
    };
    /**
     * Sets the valuedouble property value. 
     * @param value Value to set for the valuedouble property.
     */
    public set valuedouble(value: number | undefined) {
        this._valuedouble = value;
    };
    /**
     * Gets the valueinteger property value. 
     * @returns a integer
     */
    public get valueinteger() {
        return this._valueinteger;
    };
    /**
     * Sets the valueinteger property value. 
     * @param value Value to set for the valueinteger property.
     */
    public set valueinteger(value: number | undefined) {
        this._valueinteger = value;
    };
    /**
     * Gets the valuestring property value. 
     * @returns a string
     */
    public get valuestring() {
        return this._valuestring;
    };
    /**
     * Sets the valuestring property value. 
     * @param value Value to set for the valuestring property.
     */
    public set valuestring(value: string | undefined) {
        this._valuestring = value;
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
}
