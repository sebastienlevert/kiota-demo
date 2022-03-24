import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createInvoicedetailFromDiscriminatorValue} from './createInvoicedetailFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_orderinvoicingsetupFromDiscriminatorValue} from './createMsdyn_orderinvoicingsetupFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Invoicedetail, Mailboxtrackingfolder, Msdyn_orderinvoicingsetup, Principal, Principalobjectattributeaccess, Processsession, Product, Syncerror, Systemuser, Team, Transactioncurrency, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_orderinvoicingproduct extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_orderinvoicingsetup_value?: string | undefined;
    private __msdyn_product_value?: string | undefined;
    private __msdyn_unit_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_amount?: number | undefined;
    private _msdyn_amount_base?: number | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_lineorder?: number | undefined;
    private _msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct?: Invoicedetail[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_orderinvoicingproduct_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_orderinvoicingproduct_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_orderinvoicingproduct_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_orderinvoicingproduct_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_orderinvoicingproduct_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_orderinvoicingproduct_ProcessSession?: Processsession[] | undefined;
    private _msdyn_orderinvoicingproduct_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_orderinvoicingproductid?: string | undefined;
    private _msdyn_OrderInvoicingSetup?: Msdyn_orderinvoicingsetup | undefined;
    private _msdyn_Product?: Product | undefined;
    private _msdyn_quantity?: number | undefined;
    private _msdyn_Unit?: Uom | undefined;
    private _msdyn_unitprice?: number | undefined;
    private _msdyn_unitprice_base?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _msdyn_orderinvoicingsetup_value property value. 
     * @returns a string
     */
    public get _msdyn_orderinvoicingsetup_value() {
        return this.__msdyn_orderinvoicingsetup_value;
    };
    /**
     * Sets the _msdyn_orderinvoicingsetup_value property value. 
     * @param value Value to set for the _msdyn_orderinvoicingsetup_value property.
     */
    public set _msdyn_orderinvoicingsetup_value(value: string | undefined) {
        this.__msdyn_orderinvoicingsetup_value = value;
    };
    /**
     * Gets the _msdyn_product_value property value. 
     * @returns a string
     */
    public get _msdyn_product_value() {
        return this.__msdyn_product_value;
    };
    /**
     * Sets the _msdyn_product_value property value. 
     * @param value Value to set for the _msdyn_product_value property.
     */
    public set _msdyn_product_value(value: string | undefined) {
        this.__msdyn_product_value = value;
    };
    /**
     * Gets the _msdyn_unit_value property value. 
     * @returns a string
     */
    public get _msdyn_unit_value() {
        return this.__msdyn_unit_value;
    };
    /**
     * Sets the _msdyn_unit_value property value. 
     * @param value Value to set for the _msdyn_unit_value property.
     */
    public set _msdyn_unit_value(value: string | undefined) {
        this.__msdyn_unit_value = value;
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
     * Instantiates a new msdyn_orderinvoicingproduct and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_orderinvoicingsetup_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct)._msdyn_orderinvoicingsetup_value = n.getStringValue(); },
            "_msdyn_product_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct)._msdyn_product_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct)._msdyn_unit_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_amount": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_amount = n.getNumberValue(); },
            "msdyn_amount_base": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_amount_base = n.getNumberValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_internalflags = n.getStringValue(); },
            "msdyn_lineorder": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_lineorder = n.getNumberValue(); },
            "msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct = n.getCollectionOfObjectValues<Invoicedetail>(createInvoicedetailFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_name = n.getStringValue(); },
            "msdyn_orderinvoicingproduct_AsyncOperations": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_orderinvoicingproduct_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_orderinvoicingproduct_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_orderinvoicingproduct_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_orderinvoicingproduct_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_orderinvoicingproduct_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_orderinvoicingproduct_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_orderinvoicingproduct_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_orderinvoicingproduct_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_orderinvoicingproduct_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_orderinvoicingproduct_ProcessSession": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_orderinvoicingproduct_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_orderinvoicingproduct_SyncErrors": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_orderinvoicingproduct_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_orderinvoicingproductid": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_orderinvoicingproductid = n.getStringValue(); },
            "msdyn_OrderInvoicingSetup": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_OrderInvoicingSetup = n.getObjectValue<Msdyn_orderinvoicingsetup>(createMsdyn_orderinvoicingsetupFromDiscriminatorValue); },
            "msdyn_Product": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_Product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_quantity": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_quantity = n.getNumberValue(); },
            "msdyn_Unit": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_Unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_unitprice": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_unitprice = n.getNumberValue(); },
            "msdyn_unitprice_base": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).msdyn_unitprice_base = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_orderinvoicingproduct).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_amount property value. 
     * @returns a int64
     */
    public get msdyn_amount() {
        return this._msdyn_amount;
    };
    /**
     * Sets the msdyn_amount property value. 
     * @param value Value to set for the msdyn_amount property.
     */
    public set msdyn_amount(value: number | undefined) {
        this._msdyn_amount = value;
    };
    /**
     * Gets the msdyn_amount_base property value. 
     * @returns a int64
     */
    public get msdyn_amount_base() {
        return this._msdyn_amount_base;
    };
    /**
     * Sets the msdyn_amount_base property value. 
     * @param value Value to set for the msdyn_amount_base property.
     */
    public set msdyn_amount_base(value: number | undefined) {
        this._msdyn_amount_base = value;
    };
    /**
     * Gets the msdyn_internalflags property value. 
     * @returns a string
     */
    public get msdyn_internalflags() {
        return this._msdyn_internalflags;
    };
    /**
     * Sets the msdyn_internalflags property value. 
     * @param value Value to set for the msdyn_internalflags property.
     */
    public set msdyn_internalflags(value: string | undefined) {
        this._msdyn_internalflags = value;
    };
    /**
     * Gets the msdyn_lineorder property value. 
     * @returns a integer
     */
    public get msdyn_lineorder() {
        return this._msdyn_lineorder;
    };
    /**
     * Sets the msdyn_lineorder property value. 
     * @param value Value to set for the msdyn_lineorder property.
     */
    public set msdyn_lineorder(value: number | undefined) {
        this._msdyn_lineorder = value;
    };
    /**
     * Gets the msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct property value. 
     * @returns a invoicedetail
     */
    public get msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct() {
        return this._msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct;
    };
    /**
     * Sets the msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct property value. 
     * @param value Value to set for the msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct property.
     */
    public set msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct(value: Invoicedetail[] | undefined) {
        this._msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct = value;
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
     * Gets the msdyn_orderinvoicingproduct_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_orderinvoicingproduct_AsyncOperations() {
        return this._msdyn_orderinvoicingproduct_AsyncOperations;
    };
    /**
     * Sets the msdyn_orderinvoicingproduct_AsyncOperations property value. 
     * @param value Value to set for the msdyn_orderinvoicingproduct_AsyncOperations property.
     */
    public set msdyn_orderinvoicingproduct_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_orderinvoicingproduct_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_orderinvoicingproduct_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_orderinvoicingproduct_BulkDeleteFailures() {
        return this._msdyn_orderinvoicingproduct_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_orderinvoicingproduct_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_orderinvoicingproduct_BulkDeleteFailures property.
     */
    public set msdyn_orderinvoicingproduct_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_orderinvoicingproduct_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_orderinvoicingproduct_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_orderinvoicingproduct_DuplicateBaseRecord() {
        return this._msdyn_orderinvoicingproduct_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_orderinvoicingproduct_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_orderinvoicingproduct_DuplicateBaseRecord property.
     */
    public set msdyn_orderinvoicingproduct_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_orderinvoicingproduct_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_orderinvoicingproduct_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_orderinvoicingproduct_DuplicateMatchingRecord() {
        return this._msdyn_orderinvoicingproduct_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_orderinvoicingproduct_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_orderinvoicingproduct_DuplicateMatchingRecord property.
     */
    public set msdyn_orderinvoicingproduct_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_orderinvoicingproduct_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_orderinvoicingproduct_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_orderinvoicingproduct_MailboxTrackingFolders() {
        return this._msdyn_orderinvoicingproduct_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_orderinvoicingproduct_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_orderinvoicingproduct_MailboxTrackingFolders property.
     */
    public set msdyn_orderinvoicingproduct_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_orderinvoicingproduct_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses() {
        return this._msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_orderinvoicingproduct_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_orderinvoicingproduct_ProcessSession() {
        return this._msdyn_orderinvoicingproduct_ProcessSession;
    };
    /**
     * Sets the msdyn_orderinvoicingproduct_ProcessSession property value. 
     * @param value Value to set for the msdyn_orderinvoicingproduct_ProcessSession property.
     */
    public set msdyn_orderinvoicingproduct_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_orderinvoicingproduct_ProcessSession = value;
    };
    /**
     * Gets the msdyn_orderinvoicingproduct_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_orderinvoicingproduct_SyncErrors() {
        return this._msdyn_orderinvoicingproduct_SyncErrors;
    };
    /**
     * Sets the msdyn_orderinvoicingproduct_SyncErrors property value. 
     * @param value Value to set for the msdyn_orderinvoicingproduct_SyncErrors property.
     */
    public set msdyn_orderinvoicingproduct_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_orderinvoicingproduct_SyncErrors = value;
    };
    /**
     * Gets the msdyn_orderinvoicingproductid property value. 
     * @returns a string
     */
    public get msdyn_orderinvoicingproductid() {
        return this._msdyn_orderinvoicingproductid;
    };
    /**
     * Sets the msdyn_orderinvoicingproductid property value. 
     * @param value Value to set for the msdyn_orderinvoicingproductid property.
     */
    public set msdyn_orderinvoicingproductid(value: string | undefined) {
        this._msdyn_orderinvoicingproductid = value;
    };
    /**
     * Gets the msdyn_OrderInvoicingSetup property value. 
     * @returns a msdyn_orderinvoicingsetup
     */
    public get msdyn_OrderInvoicingSetup() {
        return this._msdyn_OrderInvoicingSetup;
    };
    /**
     * Sets the msdyn_OrderInvoicingSetup property value. 
     * @param value Value to set for the msdyn_OrderInvoicingSetup property.
     */
    public set msdyn_OrderInvoicingSetup(value: Msdyn_orderinvoicingsetup | undefined) {
        this._msdyn_OrderInvoicingSetup = value;
    };
    /**
     * Gets the msdyn_Product property value. 
     * @returns a product
     */
    public get msdyn_Product() {
        return this._msdyn_Product;
    };
    /**
     * Sets the msdyn_Product property value. 
     * @param value Value to set for the msdyn_Product property.
     */
    public set msdyn_Product(value: Product | undefined) {
        this._msdyn_Product = value;
    };
    /**
     * Gets the msdyn_quantity property value. 
     * @returns a int64
     */
    public get msdyn_quantity() {
        return this._msdyn_quantity;
    };
    /**
     * Sets the msdyn_quantity property value. 
     * @param value Value to set for the msdyn_quantity property.
     */
    public set msdyn_quantity(value: number | undefined) {
        this._msdyn_quantity = value;
    };
    /**
     * Gets the msdyn_Unit property value. 
     * @returns a uom
     */
    public get msdyn_Unit() {
        return this._msdyn_Unit;
    };
    /**
     * Sets the msdyn_Unit property value. 
     * @param value Value to set for the msdyn_Unit property.
     */
    public set msdyn_Unit(value: Uom | undefined) {
        this._msdyn_Unit = value;
    };
    /**
     * Gets the msdyn_unitprice property value. 
     * @returns a int64
     */
    public get msdyn_unitprice() {
        return this._msdyn_unitprice;
    };
    /**
     * Sets the msdyn_unitprice property value. 
     * @param value Value to set for the msdyn_unitprice property.
     */
    public set msdyn_unitprice(value: number | undefined) {
        this._msdyn_unitprice = value;
    };
    /**
     * Gets the msdyn_unitprice_base property value. 
     * @returns a int64
     */
    public get msdyn_unitprice_base() {
        return this._msdyn_unitprice_base;
    };
    /**
     * Sets the msdyn_unitprice_base property value. 
     * @param value Value to set for the msdyn_unitprice_base property.
     */
    public set msdyn_unitprice_base(value: number | undefined) {
        this._msdyn_unitprice_base = value;
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
        writer.writeStringValue("_msdyn_orderinvoicingsetup_value", this._msdyn_orderinvoicingsetup_value);
        writer.writeStringValue("_msdyn_product_value", this._msdyn_product_value);
        writer.writeStringValue("_msdyn_unit_value", this._msdyn_unit_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_amount", this.msdyn_amount);
        writer.writeNumberValue("msdyn_amount_base", this.msdyn_amount_base);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeNumberValue("msdyn_lineorder", this.msdyn_lineorder);
        writer.writeCollectionOfObjectValues<Invoicedetail>("msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct", this.msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_orderinvoicingproduct_AsyncOperations", this.msdyn_orderinvoicingproduct_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_orderinvoicingproduct_BulkDeleteFailures", this.msdyn_orderinvoicingproduct_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_orderinvoicingproduct_DuplicateBaseRecord", this.msdyn_orderinvoicingproduct_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_orderinvoicingproduct_DuplicateMatchingRecord", this.msdyn_orderinvoicingproduct_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_orderinvoicingproduct_MailboxTrackingFolders", this.msdyn_orderinvoicingproduct_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses", this.msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_orderinvoicingproduct_ProcessSession", this.msdyn_orderinvoicingproduct_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_orderinvoicingproduct_SyncErrors", this.msdyn_orderinvoicingproduct_SyncErrors);
        writer.writeStringValue("msdyn_orderinvoicingproductid", this.msdyn_orderinvoicingproductid);
        writer.writeObjectValue<Msdyn_orderinvoicingsetup>("msdyn_OrderInvoicingSetup", this.msdyn_OrderInvoicingSetup);
        writer.writeObjectValue<Product>("msdyn_Product", this.msdyn_Product);
        writer.writeNumberValue("msdyn_quantity", this.msdyn_quantity);
        writer.writeObjectValue<Uom>("msdyn_Unit", this.msdyn_Unit);
        writer.writeNumberValue("msdyn_unitprice", this.msdyn_unitprice);
        writer.writeNumberValue("msdyn_unitprice_base", this.msdyn_unitprice_base);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
