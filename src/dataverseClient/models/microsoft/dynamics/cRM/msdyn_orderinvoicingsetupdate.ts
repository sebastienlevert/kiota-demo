import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createInvoiceFromDiscriminatorValue} from './createInvoiceFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_orderinvoicingdateFromDiscriminatorValue} from './createMsdyn_orderinvoicingdateFromDiscriminatorValue';
import {createMsdyn_orderinvoicingsetupFromDiscriminatorValue} from './createMsdyn_orderinvoicingsetupFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Invoice, Mailboxtrackingfolder, Msdyn_orderinvoicingdate, Msdyn_orderinvoicingsetup, Principal, Principalobjectattributeaccess, Processsession, Salesorder, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_orderinvoicingsetupdate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_invoice_value?: string | undefined;
    private __msdyn_invoicesetup_value?: string | undefined;
    private __msdyn_order_value?: string | undefined;
    private __msdyn_orderinvoicingdate_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_Invoice?: Invoice | undefined;
    private _msdyn_invoicedate?: Date | undefined;
    private _msdyn_InvoiceSetup?: Msdyn_orderinvoicingsetup | undefined;
    private _msdyn_invoicestatus?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_Order?: Salesorder | undefined;
    private _msdyn_OrderInvoicingDate?: Msdyn_orderinvoicingdate | undefined;
    private _msdyn_orderinvoicingsetupdate_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_orderinvoicingsetupdate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_orderinvoicingsetupdate_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_orderinvoicingsetupdate_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_orderinvoicingsetupdate_ProcessSession?: Processsession[] | undefined;
    private _msdyn_orderinvoicingsetupdate_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_orderinvoicingsetupdateid?: string | undefined;
    private _msdyn_postponegenerationuntil?: Date | undefined;
    private _msdyn_previousinvoicedate?: Date | undefined;
    private _msdyn_revision?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Gets the _msdyn_invoice_value property value. 
     * @returns a string
     */
    public get _msdyn_invoice_value() {
        return this.__msdyn_invoice_value;
    };
    /**
     * Sets the _msdyn_invoice_value property value. 
     * @param value Value to set for the _msdyn_invoice_value property.
     */
    public set _msdyn_invoice_value(value: string | undefined) {
        this.__msdyn_invoice_value = value;
    };
    /**
     * Gets the _msdyn_invoicesetup_value property value. 
     * @returns a string
     */
    public get _msdyn_invoicesetup_value() {
        return this.__msdyn_invoicesetup_value;
    };
    /**
     * Sets the _msdyn_invoicesetup_value property value. 
     * @param value Value to set for the _msdyn_invoicesetup_value property.
     */
    public set _msdyn_invoicesetup_value(value: string | undefined) {
        this.__msdyn_invoicesetup_value = value;
    };
    /**
     * Gets the _msdyn_order_value property value. 
     * @returns a string
     */
    public get _msdyn_order_value() {
        return this.__msdyn_order_value;
    };
    /**
     * Sets the _msdyn_order_value property value. 
     * @param value Value to set for the _msdyn_order_value property.
     */
    public set _msdyn_order_value(value: string | undefined) {
        this.__msdyn_order_value = value;
    };
    /**
     * Gets the _msdyn_orderinvoicingdate_value property value. 
     * @returns a string
     */
    public get _msdyn_orderinvoicingdate_value() {
        return this.__msdyn_orderinvoicingdate_value;
    };
    /**
     * Sets the _msdyn_orderinvoicingdate_value property value. 
     * @param value Value to set for the _msdyn_orderinvoicingdate_value property.
     */
    public set _msdyn_orderinvoicingdate_value(value: string | undefined) {
        this.__msdyn_orderinvoicingdate_value = value;
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
     * Instantiates a new msdyn_orderinvoicingsetupdate and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_invoice_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate)._msdyn_invoice_value = n.getStringValue(); },
            "_msdyn_invoicesetup_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate)._msdyn_invoicesetup_value = n.getStringValue(); },
            "_msdyn_order_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate)._msdyn_order_value = n.getStringValue(); },
            "_msdyn_orderinvoicingdate_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate)._msdyn_orderinvoicingdate_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_Invoice": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_Invoice = n.getObjectValue<Invoice>(createInvoiceFromDiscriminatorValue); },
            "msdyn_invoicedate": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_invoicedate = n.getDateValue(); },
            "msdyn_InvoiceSetup": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_InvoiceSetup = n.getObjectValue<Msdyn_orderinvoicingsetup>(createMsdyn_orderinvoicingsetupFromDiscriminatorValue); },
            "msdyn_invoicestatus": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_invoicestatus = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_name = n.getStringValue(); },
            "msdyn_Order": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_Order = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "msdyn_OrderInvoicingDate": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_OrderInvoicingDate = n.getObjectValue<Msdyn_orderinvoicingdate>(createMsdyn_orderinvoicingdateFromDiscriminatorValue); },
            "msdyn_orderinvoicingsetupdate_AsyncOperations": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_orderinvoicingsetupdate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_orderinvoicingsetupdate_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_orderinvoicingsetupdate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_orderinvoicingsetupdate_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_orderinvoicingsetupdate_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_orderinvoicingsetupdate_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_orderinvoicingsetupdate_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_orderinvoicingsetupdate_ProcessSession": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_orderinvoicingsetupdate_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_orderinvoicingsetupdate_SyncErrors": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_orderinvoicingsetupdate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_orderinvoicingsetupdateid": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_orderinvoicingsetupdateid = n.getStringValue(); },
            "msdyn_postponegenerationuntil": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_postponegenerationuntil = n.getDateValue(); },
            "msdyn_previousinvoicedate": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_previousinvoicedate = n.getDateValue(); },
            "msdyn_revision": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).msdyn_revision = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_orderinvoicingsetupdate).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_Invoice property value. 
     * @returns a invoice
     */
    public get msdyn_Invoice() {
        return this._msdyn_Invoice;
    };
    /**
     * Sets the msdyn_Invoice property value. 
     * @param value Value to set for the msdyn_Invoice property.
     */
    public set msdyn_Invoice(value: Invoice | undefined) {
        this._msdyn_Invoice = value;
    };
    /**
     * Gets the msdyn_invoicedate property value. 
     * @returns a Date
     */
    public get msdyn_invoicedate() {
        return this._msdyn_invoicedate;
    };
    /**
     * Sets the msdyn_invoicedate property value. 
     * @param value Value to set for the msdyn_invoicedate property.
     */
    public set msdyn_invoicedate(value: Date | undefined) {
        this._msdyn_invoicedate = value;
    };
    /**
     * Gets the msdyn_InvoiceSetup property value. 
     * @returns a msdyn_orderinvoicingsetup
     */
    public get msdyn_InvoiceSetup() {
        return this._msdyn_InvoiceSetup;
    };
    /**
     * Sets the msdyn_InvoiceSetup property value. 
     * @param value Value to set for the msdyn_InvoiceSetup property.
     */
    public set msdyn_InvoiceSetup(value: Msdyn_orderinvoicingsetup | undefined) {
        this._msdyn_InvoiceSetup = value;
    };
    /**
     * Gets the msdyn_invoicestatus property value. 
     * @returns a integer
     */
    public get msdyn_invoicestatus() {
        return this._msdyn_invoicestatus;
    };
    /**
     * Sets the msdyn_invoicestatus property value. 
     * @param value Value to set for the msdyn_invoicestatus property.
     */
    public set msdyn_invoicestatus(value: number | undefined) {
        this._msdyn_invoicestatus = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_Order property value. 
     * @returns a salesorder
     */
    public get msdyn_Order() {
        return this._msdyn_Order;
    };
    /**
     * Sets the msdyn_Order property value. 
     * @param value Value to set for the msdyn_Order property.
     */
    public set msdyn_Order(value: Salesorder | undefined) {
        this._msdyn_Order = value;
    };
    /**
     * Gets the msdyn_OrderInvoicingDate property value. 
     * @returns a msdyn_orderinvoicingdate
     */
    public get msdyn_OrderInvoicingDate() {
        return this._msdyn_OrderInvoicingDate;
    };
    /**
     * Sets the msdyn_OrderInvoicingDate property value. 
     * @param value Value to set for the msdyn_OrderInvoicingDate property.
     */
    public set msdyn_OrderInvoicingDate(value: Msdyn_orderinvoicingdate | undefined) {
        this._msdyn_OrderInvoicingDate = value;
    };
    /**
     * Gets the msdyn_orderinvoicingsetupdate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_orderinvoicingsetupdate_AsyncOperations() {
        return this._msdyn_orderinvoicingsetupdate_AsyncOperations;
    };
    /**
     * Sets the msdyn_orderinvoicingsetupdate_AsyncOperations property value. 
     * @param value Value to set for the msdyn_orderinvoicingsetupdate_AsyncOperations property.
     */
    public set msdyn_orderinvoicingsetupdate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_orderinvoicingsetupdate_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_orderinvoicingsetupdate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_orderinvoicingsetupdate_BulkDeleteFailures() {
        return this._msdyn_orderinvoicingsetupdate_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_orderinvoicingsetupdate_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_orderinvoicingsetupdate_BulkDeleteFailures property.
     */
    public set msdyn_orderinvoicingsetupdate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_orderinvoicingsetupdate_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_orderinvoicingsetupdate_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_orderinvoicingsetupdate_DuplicateBaseRecord() {
        return this._msdyn_orderinvoicingsetupdate_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_orderinvoicingsetupdate_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_orderinvoicingsetupdate_DuplicateBaseRecord property.
     */
    public set msdyn_orderinvoicingsetupdate_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_orderinvoicingsetupdate_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord() {
        return this._msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord property.
     */
    public set msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_orderinvoicingsetupdate_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_orderinvoicingsetupdate_MailboxTrackingFolders() {
        return this._msdyn_orderinvoicingsetupdate_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_orderinvoicingsetupdate_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_orderinvoicingsetupdate_MailboxTrackingFolders property.
     */
    public set msdyn_orderinvoicingsetupdate_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_orderinvoicingsetupdate_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses() {
        return this._msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_orderinvoicingsetupdate_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_orderinvoicingsetupdate_ProcessSession() {
        return this._msdyn_orderinvoicingsetupdate_ProcessSession;
    };
    /**
     * Sets the msdyn_orderinvoicingsetupdate_ProcessSession property value. 
     * @param value Value to set for the msdyn_orderinvoicingsetupdate_ProcessSession property.
     */
    public set msdyn_orderinvoicingsetupdate_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_orderinvoicingsetupdate_ProcessSession = value;
    };
    /**
     * Gets the msdyn_orderinvoicingsetupdate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_orderinvoicingsetupdate_SyncErrors() {
        return this._msdyn_orderinvoicingsetupdate_SyncErrors;
    };
    /**
     * Sets the msdyn_orderinvoicingsetupdate_SyncErrors property value. 
     * @param value Value to set for the msdyn_orderinvoicingsetupdate_SyncErrors property.
     */
    public set msdyn_orderinvoicingsetupdate_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_orderinvoicingsetupdate_SyncErrors = value;
    };
    /**
     * Gets the msdyn_orderinvoicingsetupdateid property value. 
     * @returns a string
     */
    public get msdyn_orderinvoicingsetupdateid() {
        return this._msdyn_orderinvoicingsetupdateid;
    };
    /**
     * Sets the msdyn_orderinvoicingsetupdateid property value. 
     * @param value Value to set for the msdyn_orderinvoicingsetupdateid property.
     */
    public set msdyn_orderinvoicingsetupdateid(value: string | undefined) {
        this._msdyn_orderinvoicingsetupdateid = value;
    };
    /**
     * Gets the msdyn_postponegenerationuntil property value. 
     * @returns a Date
     */
    public get msdyn_postponegenerationuntil() {
        return this._msdyn_postponegenerationuntil;
    };
    /**
     * Sets the msdyn_postponegenerationuntil property value. 
     * @param value Value to set for the msdyn_postponegenerationuntil property.
     */
    public set msdyn_postponegenerationuntil(value: Date | undefined) {
        this._msdyn_postponegenerationuntil = value;
    };
    /**
     * Gets the msdyn_previousinvoicedate property value. 
     * @returns a Date
     */
    public get msdyn_previousinvoicedate() {
        return this._msdyn_previousinvoicedate;
    };
    /**
     * Sets the msdyn_previousinvoicedate property value. 
     * @param value Value to set for the msdyn_previousinvoicedate property.
     */
    public set msdyn_previousinvoicedate(value: Date | undefined) {
        this._msdyn_previousinvoicedate = value;
    };
    /**
     * Gets the msdyn_revision property value. 
     * @returns a integer
     */
    public get msdyn_revision() {
        return this._msdyn_revision;
    };
    /**
     * Sets the msdyn_revision property value. 
     * @param value Value to set for the msdyn_revision property.
     */
    public set msdyn_revision(value: number | undefined) {
        this._msdyn_revision = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_invoice_value", this._msdyn_invoice_value);
        writer.writeStringValue("_msdyn_invoicesetup_value", this._msdyn_invoicesetup_value);
        writer.writeStringValue("_msdyn_order_value", this._msdyn_order_value);
        writer.writeStringValue("_msdyn_orderinvoicingdate_value", this._msdyn_orderinvoicingdate_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Invoice>("msdyn_Invoice", this.msdyn_Invoice);
        writer.writeDateValue("msdyn_invoicedate", this.msdyn_invoicedate);
        writer.writeObjectValue<Msdyn_orderinvoicingsetup>("msdyn_InvoiceSetup", this.msdyn_InvoiceSetup);
        writer.writeNumberValue("msdyn_invoicestatus", this.msdyn_invoicestatus);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Salesorder>("msdyn_Order", this.msdyn_Order);
        writer.writeObjectValue<Msdyn_orderinvoicingdate>("msdyn_OrderInvoicingDate", this.msdyn_OrderInvoicingDate);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_orderinvoicingsetupdate_AsyncOperations", this.msdyn_orderinvoicingsetupdate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_orderinvoicingsetupdate_BulkDeleteFailures", this.msdyn_orderinvoicingsetupdate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_orderinvoicingsetupdate_DuplicateBaseRecord", this.msdyn_orderinvoicingsetupdate_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord", this.msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_orderinvoicingsetupdate_MailboxTrackingFolders", this.msdyn_orderinvoicingsetupdate_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses", this.msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_orderinvoicingsetupdate_ProcessSession", this.msdyn_orderinvoicingsetupdate_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_orderinvoicingsetupdate_SyncErrors", this.msdyn_orderinvoicingsetupdate_SyncErrors);
        writer.writeStringValue("msdyn_orderinvoicingsetupdateid", this.msdyn_orderinvoicingsetupdateid);
        writer.writeDateValue("msdyn_postponegenerationuntil", this.msdyn_postponegenerationuntil);
        writer.writeDateValue("msdyn_previousinvoicedate", this.msdyn_previousinvoicedate);
        writer.writeNumberValue("msdyn_revision", this.msdyn_revision);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
}
