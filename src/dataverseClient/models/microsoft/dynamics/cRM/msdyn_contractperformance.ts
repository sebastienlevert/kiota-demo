import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_contractlinedetailperformanceFromDiscriminatorValue} from './createMsdyn_contractlinedetailperformanceFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_contractlinedetailperformance, Principal, Principalobjectattributeaccess, Processsession, Salesorder, Salesorderdetail, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_contractperformance extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_contractlineid_value?: string | undefined;
    private __msdyn_salesorderid_value?: string | undefined;
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
    private _msdyn_billedamount?: number | undefined;
    private _msdyn_billedamount_base?: number | undefined;
    private _msdyn_billingtypecode?: number | undefined;
    private _msdyn_billingtypename?: string | undefined;
    private _msdyn_ContractLineId?: Salesorderdetail | undefined;
    private _msdyn_contractperformance_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_contractperformance_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_contractperformance_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId?: Msdyn_contractlinedetailperformance[] | undefined;
    private _msdyn_contractperformance_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_contractperformance_ProcessSession?: Processsession[] | undefined;
    private _msdyn_contractperformance_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_contractperformanceid?: string | undefined;
    private _msdyn_contractvalue?: number | undefined;
    private _msdyn_contractvalue_base?: number | undefined;
    private _msdyn_costincurred?: number | undefined;
    private _msdyn_costincurred_base?: number | undefined;
    private _msdyn_estimatedcost?: number | undefined;
    private _msdyn_estimatedcost_base?: number | undefined;
    private _msdyn_expectedmargin?: number | undefined;
    private _msdyn_grossmargin?: number | undefined;
    private _msdyn_isproduct?: boolean | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_salesorderid?: Salesorder | undefined;
    private _msdyn_transactionclassification?: string | undefined;
    private _msdyn_unit?: string | undefined;
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
     * Gets the _msdyn_contractlineid_value property value. 
     * @returns a string
     */
    public get _msdyn_contractlineid_value() {
        return this.__msdyn_contractlineid_value;
    };
    /**
     * Sets the _msdyn_contractlineid_value property value. 
     * @param value Value to set for the _msdyn_contractlineid_value property.
     */
    public set _msdyn_contractlineid_value(value: string | undefined) {
        this.__msdyn_contractlineid_value = value;
    };
    /**
     * Gets the _msdyn_salesorderid_value property value. 
     * @returns a string
     */
    public get _msdyn_salesorderid_value() {
        return this.__msdyn_salesorderid_value;
    };
    /**
     * Sets the _msdyn_salesorderid_value property value. 
     * @param value Value to set for the _msdyn_salesorderid_value property.
     */
    public set _msdyn_salesorderid_value(value: string | undefined) {
        this.__msdyn_salesorderid_value = value;
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
     * Instantiates a new msdyn_contractperformance and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_contractperformance)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_contractperformance)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_contractperformance)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_contractperformance)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_contractlineid_value": (o, n) => { (o as unknown as Msdyn_contractperformance)._msdyn_contractlineid_value = n.getStringValue(); },
            "_msdyn_salesorderid_value": (o, n) => { (o as unknown as Msdyn_contractperformance)._msdyn_salesorderid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_contractperformance)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_contractperformance)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_contractperformance)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_contractperformance)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_contractperformance)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_contractperformance).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_contractperformance).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_contractperformance).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_contractperformance).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_contractperformance).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_contractperformance).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_contractperformance).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_contractperformance).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_billedamount": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_billedamount = n.getNumberValue(); },
            "msdyn_billedamount_base": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_billedamount_base = n.getNumberValue(); },
            "msdyn_billingtypecode": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_billingtypecode = n.getNumberValue(); },
            "msdyn_billingtypename": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_billingtypename = n.getStringValue(); },
            "msdyn_ContractLineId": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_ContractLineId = n.getObjectValue<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "msdyn_contractperformance_AsyncOperations": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_contractperformance_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_contractperformance_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_contractperformance_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_contractperformance_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_contractperformance_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId = n.getCollectionOfObjectValues<Msdyn_contractlinedetailperformance>(createMsdyn_contractlinedetailperformanceFromDiscriminatorValue); },
            "msdyn_contractperformance_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_contractperformance_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_contractperformance_ProcessSession": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_contractperformance_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_contractperformance_SyncErrors": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_contractperformance_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_contractperformanceid": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_contractperformanceid = n.getStringValue(); },
            "msdyn_contractvalue": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_contractvalue = n.getNumberValue(); },
            "msdyn_contractvalue_base": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_contractvalue_base = n.getNumberValue(); },
            "msdyn_costincurred": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_costincurred = n.getNumberValue(); },
            "msdyn_costincurred_base": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_costincurred_base = n.getNumberValue(); },
            "msdyn_estimatedcost": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_estimatedcost = n.getNumberValue(); },
            "msdyn_estimatedcost_base": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_estimatedcost_base = n.getNumberValue(); },
            "msdyn_expectedmargin": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_expectedmargin = n.getNumberValue(); },
            "msdyn_grossmargin": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_grossmargin = n.getNumberValue(); },
            "msdyn_isproduct": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_isproduct = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_name = n.getStringValue(); },
            "msdyn_salesorderid": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_salesorderid = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "msdyn_transactionclassification": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_transactionclassification = n.getStringValue(); },
            "msdyn_unit": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_unit = n.getStringValue(); },
            "msdyn_unitprice": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_unitprice = n.getNumberValue(); },
            "msdyn_unitprice_base": (o, n) => { (o as unknown as Msdyn_contractperformance).msdyn_unitprice_base = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_contractperformance).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_contractperformance).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_contractperformance).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_contractperformance).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_contractperformance).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_contractperformance).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_contractperformance).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_contractperformance).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_contractperformance).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_contractperformance).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_contractperformance).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_billedamount property value. 
     * @returns a int64
     */
    public get msdyn_billedamount() {
        return this._msdyn_billedamount;
    };
    /**
     * Sets the msdyn_billedamount property value. 
     * @param value Value to set for the msdyn_billedamount property.
     */
    public set msdyn_billedamount(value: number | undefined) {
        this._msdyn_billedamount = value;
    };
    /**
     * Gets the msdyn_billedamount_base property value. 
     * @returns a int64
     */
    public get msdyn_billedamount_base() {
        return this._msdyn_billedamount_base;
    };
    /**
     * Sets the msdyn_billedamount_base property value. 
     * @param value Value to set for the msdyn_billedamount_base property.
     */
    public set msdyn_billedamount_base(value: number | undefined) {
        this._msdyn_billedamount_base = value;
    };
    /**
     * Gets the msdyn_billingtypecode property value. 
     * @returns a integer
     */
    public get msdyn_billingtypecode() {
        return this._msdyn_billingtypecode;
    };
    /**
     * Sets the msdyn_billingtypecode property value. 
     * @param value Value to set for the msdyn_billingtypecode property.
     */
    public set msdyn_billingtypecode(value: number | undefined) {
        this._msdyn_billingtypecode = value;
    };
    /**
     * Gets the msdyn_billingtypename property value. 
     * @returns a string
     */
    public get msdyn_billingtypename() {
        return this._msdyn_billingtypename;
    };
    /**
     * Sets the msdyn_billingtypename property value. 
     * @param value Value to set for the msdyn_billingtypename property.
     */
    public set msdyn_billingtypename(value: string | undefined) {
        this._msdyn_billingtypename = value;
    };
    /**
     * Gets the msdyn_ContractLineId property value. 
     * @returns a salesorderdetail
     */
    public get msdyn_ContractLineId() {
        return this._msdyn_ContractLineId;
    };
    /**
     * Sets the msdyn_ContractLineId property value. 
     * @param value Value to set for the msdyn_ContractLineId property.
     */
    public set msdyn_ContractLineId(value: Salesorderdetail | undefined) {
        this._msdyn_ContractLineId = value;
    };
    /**
     * Gets the msdyn_contractperformance_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_contractperformance_AsyncOperations() {
        return this._msdyn_contractperformance_AsyncOperations;
    };
    /**
     * Sets the msdyn_contractperformance_AsyncOperations property value. 
     * @param value Value to set for the msdyn_contractperformance_AsyncOperations property.
     */
    public set msdyn_contractperformance_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_contractperformance_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_contractperformance_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_contractperformance_BulkDeleteFailures() {
        return this._msdyn_contractperformance_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_contractperformance_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_contractperformance_BulkDeleteFailures property.
     */
    public set msdyn_contractperformance_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_contractperformance_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_contractperformance_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_contractperformance_MailboxTrackingFolders() {
        return this._msdyn_contractperformance_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_contractperformance_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_contractperformance_MailboxTrackingFolders property.
     */
    public set msdyn_contractperformance_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_contractperformance_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId property value. 
     * @returns a msdyn_contractlinedetailperformance
     */
    public get msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId() {
        return this._msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId;
    };
    /**
     * Sets the msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId property value. 
     * @param value Value to set for the msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId property.
     */
    public set msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId(value: Msdyn_contractlinedetailperformance[] | undefined) {
        this._msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId = value;
    };
    /**
     * Gets the msdyn_contractperformance_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_contractperformance_PrincipalObjectAttributeAccesses() {
        return this._msdyn_contractperformance_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_contractperformance_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_contractperformance_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_contractperformance_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_contractperformance_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_contractperformance_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_contractperformance_ProcessSession() {
        return this._msdyn_contractperformance_ProcessSession;
    };
    /**
     * Sets the msdyn_contractperformance_ProcessSession property value. 
     * @param value Value to set for the msdyn_contractperformance_ProcessSession property.
     */
    public set msdyn_contractperformance_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_contractperformance_ProcessSession = value;
    };
    /**
     * Gets the msdyn_contractperformance_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_contractperformance_SyncErrors() {
        return this._msdyn_contractperformance_SyncErrors;
    };
    /**
     * Sets the msdyn_contractperformance_SyncErrors property value. 
     * @param value Value to set for the msdyn_contractperformance_SyncErrors property.
     */
    public set msdyn_contractperformance_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_contractperformance_SyncErrors = value;
    };
    /**
     * Gets the msdyn_contractperformanceid property value. 
     * @returns a string
     */
    public get msdyn_contractperformanceid() {
        return this._msdyn_contractperformanceid;
    };
    /**
     * Sets the msdyn_contractperformanceid property value. 
     * @param value Value to set for the msdyn_contractperformanceid property.
     */
    public set msdyn_contractperformanceid(value: string | undefined) {
        this._msdyn_contractperformanceid = value;
    };
    /**
     * Gets the msdyn_contractvalue property value. 
     * @returns a int64
     */
    public get msdyn_contractvalue() {
        return this._msdyn_contractvalue;
    };
    /**
     * Sets the msdyn_contractvalue property value. 
     * @param value Value to set for the msdyn_contractvalue property.
     */
    public set msdyn_contractvalue(value: number | undefined) {
        this._msdyn_contractvalue = value;
    };
    /**
     * Gets the msdyn_contractvalue_base property value. 
     * @returns a int64
     */
    public get msdyn_contractvalue_base() {
        return this._msdyn_contractvalue_base;
    };
    /**
     * Sets the msdyn_contractvalue_base property value. 
     * @param value Value to set for the msdyn_contractvalue_base property.
     */
    public set msdyn_contractvalue_base(value: number | undefined) {
        this._msdyn_contractvalue_base = value;
    };
    /**
     * Gets the msdyn_costincurred property value. 
     * @returns a int64
     */
    public get msdyn_costincurred() {
        return this._msdyn_costincurred;
    };
    /**
     * Sets the msdyn_costincurred property value. 
     * @param value Value to set for the msdyn_costincurred property.
     */
    public set msdyn_costincurred(value: number | undefined) {
        this._msdyn_costincurred = value;
    };
    /**
     * Gets the msdyn_costincurred_base property value. 
     * @returns a int64
     */
    public get msdyn_costincurred_base() {
        return this._msdyn_costincurred_base;
    };
    /**
     * Sets the msdyn_costincurred_base property value. 
     * @param value Value to set for the msdyn_costincurred_base property.
     */
    public set msdyn_costincurred_base(value: number | undefined) {
        this._msdyn_costincurred_base = value;
    };
    /**
     * Gets the msdyn_estimatedcost property value. 
     * @returns a int64
     */
    public get msdyn_estimatedcost() {
        return this._msdyn_estimatedcost;
    };
    /**
     * Sets the msdyn_estimatedcost property value. 
     * @param value Value to set for the msdyn_estimatedcost property.
     */
    public set msdyn_estimatedcost(value: number | undefined) {
        this._msdyn_estimatedcost = value;
    };
    /**
     * Gets the msdyn_estimatedcost_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatedcost_base() {
        return this._msdyn_estimatedcost_base;
    };
    /**
     * Sets the msdyn_estimatedcost_base property value. 
     * @param value Value to set for the msdyn_estimatedcost_base property.
     */
    public set msdyn_estimatedcost_base(value: number | undefined) {
        this._msdyn_estimatedcost_base = value;
    };
    /**
     * Gets the msdyn_expectedmargin property value. 
     * @returns a int64
     */
    public get msdyn_expectedmargin() {
        return this._msdyn_expectedmargin;
    };
    /**
     * Sets the msdyn_expectedmargin property value. 
     * @param value Value to set for the msdyn_expectedmargin property.
     */
    public set msdyn_expectedmargin(value: number | undefined) {
        this._msdyn_expectedmargin = value;
    };
    /**
     * Gets the msdyn_grossmargin property value. 
     * @returns a int64
     */
    public get msdyn_grossmargin() {
        return this._msdyn_grossmargin;
    };
    /**
     * Sets the msdyn_grossmargin property value. 
     * @param value Value to set for the msdyn_grossmargin property.
     */
    public set msdyn_grossmargin(value: number | undefined) {
        this._msdyn_grossmargin = value;
    };
    /**
     * Gets the msdyn_isproduct property value. 
     * @returns a boolean
     */
    public get msdyn_isproduct() {
        return this._msdyn_isproduct;
    };
    /**
     * Sets the msdyn_isproduct property value. 
     * @param value Value to set for the msdyn_isproduct property.
     */
    public set msdyn_isproduct(value: boolean | undefined) {
        this._msdyn_isproduct = value;
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
     * Gets the msdyn_salesorderid property value. 
     * @returns a salesorder
     */
    public get msdyn_salesorderid() {
        return this._msdyn_salesorderid;
    };
    /**
     * Sets the msdyn_salesorderid property value. 
     * @param value Value to set for the msdyn_salesorderid property.
     */
    public set msdyn_salesorderid(value: Salesorder | undefined) {
        this._msdyn_salesorderid = value;
    };
    /**
     * Gets the msdyn_transactionclassification property value. 
     * @returns a string
     */
    public get msdyn_transactionclassification() {
        return this._msdyn_transactionclassification;
    };
    /**
     * Sets the msdyn_transactionclassification property value. 
     * @param value Value to set for the msdyn_transactionclassification property.
     */
    public set msdyn_transactionclassification(value: string | undefined) {
        this._msdyn_transactionclassification = value;
    };
    /**
     * Gets the msdyn_unit property value. 
     * @returns a string
     */
    public get msdyn_unit() {
        return this._msdyn_unit;
    };
    /**
     * Sets the msdyn_unit property value. 
     * @param value Value to set for the msdyn_unit property.
     */
    public set msdyn_unit(value: string | undefined) {
        this._msdyn_unit = value;
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
        writer.writeStringValue("_msdyn_contractlineid_value", this._msdyn_contractlineid_value);
        writer.writeStringValue("_msdyn_salesorderid_value", this._msdyn_salesorderid_value);
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
        writer.writeNumberValue("msdyn_billedamount", this.msdyn_billedamount);
        writer.writeNumberValue("msdyn_billedamount_base", this.msdyn_billedamount_base);
        writer.writeNumberValue("msdyn_billingtypecode", this.msdyn_billingtypecode);
        writer.writeStringValue("msdyn_billingtypename", this.msdyn_billingtypename);
        writer.writeObjectValue<Salesorderdetail>("msdyn_ContractLineId", this.msdyn_ContractLineId);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_contractperformance_AsyncOperations", this.msdyn_contractperformance_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_contractperformance_BulkDeleteFailures", this.msdyn_contractperformance_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_contractperformance_MailboxTrackingFolders", this.msdyn_contractperformance_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_contractlinedetailperformance>("msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId", this.msdyn_contractperformance_msdyn_contractlinedetailperformance_ContractPerformanceId);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_contractperformance_PrincipalObjectAttributeAccesses", this.msdyn_contractperformance_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_contractperformance_ProcessSession", this.msdyn_contractperformance_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_contractperformance_SyncErrors", this.msdyn_contractperformance_SyncErrors);
        writer.writeStringValue("msdyn_contractperformanceid", this.msdyn_contractperformanceid);
        writer.writeNumberValue("msdyn_contractvalue", this.msdyn_contractvalue);
        writer.writeNumberValue("msdyn_contractvalue_base", this.msdyn_contractvalue_base);
        writer.writeNumberValue("msdyn_costincurred", this.msdyn_costincurred);
        writer.writeNumberValue("msdyn_costincurred_base", this.msdyn_costincurred_base);
        writer.writeNumberValue("msdyn_estimatedcost", this.msdyn_estimatedcost);
        writer.writeNumberValue("msdyn_estimatedcost_base", this.msdyn_estimatedcost_base);
        writer.writeNumberValue("msdyn_expectedmargin", this.msdyn_expectedmargin);
        writer.writeNumberValue("msdyn_grossmargin", this.msdyn_grossmargin);
        writer.writeBooleanValue("msdyn_isproduct", this.msdyn_isproduct);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Salesorder>("msdyn_salesorderid", this.msdyn_salesorderid);
        writer.writeStringValue("msdyn_transactionclassification", this.msdyn_transactionclassification);
        writer.writeStringValue("msdyn_unit", this.msdyn_unit);
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
