import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_customerasset, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_problematicasset extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_asset_value?: string | undefined;
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
    private _msdyn_asset?: Msdyn_customerasset | undefined;
    private _msdyn_assetid?: string | undefined;
    private _msdyn_breakfixcost?: number | undefined;
    private _msdyn_breakfixcost_base?: number | undefined;
    private _msdyn_breakfixsale?: number | undefined;
    private _msdyn_breakfixsale_base?: number | undefined;
    private _msdyn_breakfixworkordercount?: number | undefined;
    private _msdyn_confidence?: number | undefined;
    private _msdyn_highertotalcost?: number | undefined;
    private _msdyn_higherworkordercount?: number | undefined;
    private _msdyn_maintenancecost?: number | undefined;
    private _msdyn_maintenancecost_base?: number | undefined;
    private _msdyn_maintenancesale?: number | undefined;
    private _msdyn_maintenancesale_base?: number | undefined;
    private _msdyn_maintenanceworkordercount?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_numberofdays?: number | undefined;
    private _msdyn_problematicasset_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_problematicasset_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_problematicasset_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_problematicasset_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_problematicasset_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_problematicasset_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_problematicasset_ProcessSession?: Processsession[] | undefined;
    private _msdyn_problematicasset_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_problematicassetid?: string | undefined;
    private _msdyn_replacementcost?: number | undefined;
    private _msdyn_replacementcost_base?: number | undefined;
    private _msdyn_replacementsale?: number | undefined;
    private _msdyn_replacementsale_base?: number | undefined;
    private _msdyn_runid?: string | undefined;
    private _msdyn_score?: number | undefined;
    private _msdyn_suggestion?: number | undefined;
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
     * Gets the _msdyn_asset_value property value. 
     * @returns a string
     */
    public get _msdyn_asset_value() {
        return this.__msdyn_asset_value;
    };
    /**
     * Sets the _msdyn_asset_value property value. 
     * @param value Value to set for the _msdyn_asset_value property.
     */
    public set _msdyn_asset_value(value: string | undefined) {
        this.__msdyn_asset_value = value;
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
     * Instantiates a new msdyn_problematicasset and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_problematicasset)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_problematicasset)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_problematicasset)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_problematicasset)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_asset_value": (o, n) => { (o as unknown as Msdyn_problematicasset)._msdyn_asset_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_problematicasset)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_problematicasset)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_problematicasset)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_problematicasset)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_problematicasset)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_problematicasset).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_problematicasset).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_problematicasset).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_problematicasset).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_problematicasset).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_problematicasset).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_problematicasset).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_problematicasset).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_asset": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_asset = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_assetid": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_assetid = n.getStringValue(); },
            "msdyn_breakfixcost": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_breakfixcost = n.getNumberValue(); },
            "msdyn_breakfixcost_base": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_breakfixcost_base = n.getNumberValue(); },
            "msdyn_breakfixsale": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_breakfixsale = n.getNumberValue(); },
            "msdyn_breakfixsale_base": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_breakfixsale_base = n.getNumberValue(); },
            "msdyn_breakfixworkordercount": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_breakfixworkordercount = n.getNumberValue(); },
            "msdyn_confidence": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_confidence = n.getNumberValue(); },
            "msdyn_highertotalcost": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_highertotalcost = n.getNumberValue(); },
            "msdyn_higherworkordercount": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_higherworkordercount = n.getNumberValue(); },
            "msdyn_maintenancecost": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_maintenancecost = n.getNumberValue(); },
            "msdyn_maintenancecost_base": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_maintenancecost_base = n.getNumberValue(); },
            "msdyn_maintenancesale": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_maintenancesale = n.getNumberValue(); },
            "msdyn_maintenancesale_base": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_maintenancesale_base = n.getNumberValue(); },
            "msdyn_maintenanceworkordercount": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_maintenanceworkordercount = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_name = n.getStringValue(); },
            "msdyn_numberofdays": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_numberofdays = n.getNumberValue(); },
            "msdyn_problematicasset_AsyncOperations": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_problematicasset_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_problematicasset_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_problematicasset_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_problematicasset_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_problematicasset_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_problematicasset_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_problematicasset_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_problematicasset_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_problematicasset_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_problematicasset_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_problematicasset_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_problematicasset_ProcessSession": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_problematicasset_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_problematicasset_SyncErrors": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_problematicasset_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_problematicassetid": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_problematicassetid = n.getStringValue(); },
            "msdyn_replacementcost": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_replacementcost = n.getNumberValue(); },
            "msdyn_replacementcost_base": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_replacementcost_base = n.getNumberValue(); },
            "msdyn_replacementsale": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_replacementsale = n.getNumberValue(); },
            "msdyn_replacementsale_base": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_replacementsale_base = n.getNumberValue(); },
            "msdyn_runid": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_runid = n.getStringValue(); },
            "msdyn_score": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_score = n.getNumberValue(); },
            "msdyn_suggestion": (o, n) => { (o as unknown as Msdyn_problematicasset).msdyn_suggestion = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_problematicasset).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_problematicasset).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_problematicasset).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_problematicasset).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_problematicasset).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_problematicasset).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_problematicasset).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_problematicasset).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_problematicasset).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_problematicasset).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_problematicasset).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_asset property value. 
     * @returns a msdyn_customerasset
     */
    public get msdyn_asset() {
        return this._msdyn_asset;
    };
    /**
     * Sets the msdyn_asset property value. 
     * @param value Value to set for the msdyn_asset property.
     */
    public set msdyn_asset(value: Msdyn_customerasset | undefined) {
        this._msdyn_asset = value;
    };
    /**
     * Gets the msdyn_assetid property value. 
     * @returns a string
     */
    public get msdyn_assetid() {
        return this._msdyn_assetid;
    };
    /**
     * Sets the msdyn_assetid property value. 
     * @param value Value to set for the msdyn_assetid property.
     */
    public set msdyn_assetid(value: string | undefined) {
        this._msdyn_assetid = value;
    };
    /**
     * Gets the msdyn_breakfixcost property value. 
     * @returns a int64
     */
    public get msdyn_breakfixcost() {
        return this._msdyn_breakfixcost;
    };
    /**
     * Sets the msdyn_breakfixcost property value. 
     * @param value Value to set for the msdyn_breakfixcost property.
     */
    public set msdyn_breakfixcost(value: number | undefined) {
        this._msdyn_breakfixcost = value;
    };
    /**
     * Gets the msdyn_breakfixcost_base property value. 
     * @returns a int64
     */
    public get msdyn_breakfixcost_base() {
        return this._msdyn_breakfixcost_base;
    };
    /**
     * Sets the msdyn_breakfixcost_base property value. 
     * @param value Value to set for the msdyn_breakfixcost_base property.
     */
    public set msdyn_breakfixcost_base(value: number | undefined) {
        this._msdyn_breakfixcost_base = value;
    };
    /**
     * Gets the msdyn_breakfixsale property value. 
     * @returns a int64
     */
    public get msdyn_breakfixsale() {
        return this._msdyn_breakfixsale;
    };
    /**
     * Sets the msdyn_breakfixsale property value. 
     * @param value Value to set for the msdyn_breakfixsale property.
     */
    public set msdyn_breakfixsale(value: number | undefined) {
        this._msdyn_breakfixsale = value;
    };
    /**
     * Gets the msdyn_breakfixsale_base property value. 
     * @returns a int64
     */
    public get msdyn_breakfixsale_base() {
        return this._msdyn_breakfixsale_base;
    };
    /**
     * Sets the msdyn_breakfixsale_base property value. 
     * @param value Value to set for the msdyn_breakfixsale_base property.
     */
    public set msdyn_breakfixsale_base(value: number | undefined) {
        this._msdyn_breakfixsale_base = value;
    };
    /**
     * Gets the msdyn_breakfixworkordercount property value. 
     * @returns a integer
     */
    public get msdyn_breakfixworkordercount() {
        return this._msdyn_breakfixworkordercount;
    };
    /**
     * Sets the msdyn_breakfixworkordercount property value. 
     * @param value Value to set for the msdyn_breakfixworkordercount property.
     */
    public set msdyn_breakfixworkordercount(value: number | undefined) {
        this._msdyn_breakfixworkordercount = value;
    };
    /**
     * Gets the msdyn_confidence property value. 
     * @returns a double
     */
    public get msdyn_confidence() {
        return this._msdyn_confidence;
    };
    /**
     * Sets the msdyn_confidence property value. 
     * @param value Value to set for the msdyn_confidence property.
     */
    public set msdyn_confidence(value: number | undefined) {
        this._msdyn_confidence = value;
    };
    /**
     * Gets the msdyn_highertotalcost property value. 
     * @returns a integer
     */
    public get msdyn_highertotalcost() {
        return this._msdyn_highertotalcost;
    };
    /**
     * Sets the msdyn_highertotalcost property value. 
     * @param value Value to set for the msdyn_highertotalcost property.
     */
    public set msdyn_highertotalcost(value: number | undefined) {
        this._msdyn_highertotalcost = value;
    };
    /**
     * Gets the msdyn_higherworkordercount property value. 
     * @returns a integer
     */
    public get msdyn_higherworkordercount() {
        return this._msdyn_higherworkordercount;
    };
    /**
     * Sets the msdyn_higherworkordercount property value. 
     * @param value Value to set for the msdyn_higherworkordercount property.
     */
    public set msdyn_higherworkordercount(value: number | undefined) {
        this._msdyn_higherworkordercount = value;
    };
    /**
     * Gets the msdyn_maintenancecost property value. 
     * @returns a int64
     */
    public get msdyn_maintenancecost() {
        return this._msdyn_maintenancecost;
    };
    /**
     * Sets the msdyn_maintenancecost property value. 
     * @param value Value to set for the msdyn_maintenancecost property.
     */
    public set msdyn_maintenancecost(value: number | undefined) {
        this._msdyn_maintenancecost = value;
    };
    /**
     * Gets the msdyn_maintenancecost_base property value. 
     * @returns a int64
     */
    public get msdyn_maintenancecost_base() {
        return this._msdyn_maintenancecost_base;
    };
    /**
     * Sets the msdyn_maintenancecost_base property value. 
     * @param value Value to set for the msdyn_maintenancecost_base property.
     */
    public set msdyn_maintenancecost_base(value: number | undefined) {
        this._msdyn_maintenancecost_base = value;
    };
    /**
     * Gets the msdyn_maintenancesale property value. 
     * @returns a int64
     */
    public get msdyn_maintenancesale() {
        return this._msdyn_maintenancesale;
    };
    /**
     * Sets the msdyn_maintenancesale property value. 
     * @param value Value to set for the msdyn_maintenancesale property.
     */
    public set msdyn_maintenancesale(value: number | undefined) {
        this._msdyn_maintenancesale = value;
    };
    /**
     * Gets the msdyn_maintenancesale_base property value. 
     * @returns a int64
     */
    public get msdyn_maintenancesale_base() {
        return this._msdyn_maintenancesale_base;
    };
    /**
     * Sets the msdyn_maintenancesale_base property value. 
     * @param value Value to set for the msdyn_maintenancesale_base property.
     */
    public set msdyn_maintenancesale_base(value: number | undefined) {
        this._msdyn_maintenancesale_base = value;
    };
    /**
     * Gets the msdyn_maintenanceworkordercount property value. 
     * @returns a integer
     */
    public get msdyn_maintenanceworkordercount() {
        return this._msdyn_maintenanceworkordercount;
    };
    /**
     * Sets the msdyn_maintenanceworkordercount property value. 
     * @param value Value to set for the msdyn_maintenanceworkordercount property.
     */
    public set msdyn_maintenanceworkordercount(value: number | undefined) {
        this._msdyn_maintenanceworkordercount = value;
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
     * Gets the msdyn_numberofdays property value. 
     * @returns a integer
     */
    public get msdyn_numberofdays() {
        return this._msdyn_numberofdays;
    };
    /**
     * Sets the msdyn_numberofdays property value. 
     * @param value Value to set for the msdyn_numberofdays property.
     */
    public set msdyn_numberofdays(value: number | undefined) {
        this._msdyn_numberofdays = value;
    };
    /**
     * Gets the msdyn_problematicasset_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_problematicasset_AsyncOperations() {
        return this._msdyn_problematicasset_AsyncOperations;
    };
    /**
     * Sets the msdyn_problematicasset_AsyncOperations property value. 
     * @param value Value to set for the msdyn_problematicasset_AsyncOperations property.
     */
    public set msdyn_problematicasset_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_problematicasset_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_problematicasset_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_problematicasset_BulkDeleteFailures() {
        return this._msdyn_problematicasset_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_problematicasset_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_problematicasset_BulkDeleteFailures property.
     */
    public set msdyn_problematicasset_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_problematicasset_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_problematicasset_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_problematicasset_DuplicateBaseRecord() {
        return this._msdyn_problematicasset_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_problematicasset_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_problematicasset_DuplicateBaseRecord property.
     */
    public set msdyn_problematicasset_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_problematicasset_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_problematicasset_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_problematicasset_DuplicateMatchingRecord() {
        return this._msdyn_problematicasset_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_problematicasset_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_problematicasset_DuplicateMatchingRecord property.
     */
    public set msdyn_problematicasset_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_problematicasset_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_problematicasset_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_problematicasset_MailboxTrackingFolders() {
        return this._msdyn_problematicasset_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_problematicasset_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_problematicasset_MailboxTrackingFolders property.
     */
    public set msdyn_problematicasset_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_problematicasset_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_problematicasset_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_problematicasset_PrincipalObjectAttributeAccesses() {
        return this._msdyn_problematicasset_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_problematicasset_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_problematicasset_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_problematicasset_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_problematicasset_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_problematicasset_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_problematicasset_ProcessSession() {
        return this._msdyn_problematicasset_ProcessSession;
    };
    /**
     * Sets the msdyn_problematicasset_ProcessSession property value. 
     * @param value Value to set for the msdyn_problematicasset_ProcessSession property.
     */
    public set msdyn_problematicasset_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_problematicasset_ProcessSession = value;
    };
    /**
     * Gets the msdyn_problematicasset_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_problematicasset_SyncErrors() {
        return this._msdyn_problematicasset_SyncErrors;
    };
    /**
     * Sets the msdyn_problematicasset_SyncErrors property value. 
     * @param value Value to set for the msdyn_problematicasset_SyncErrors property.
     */
    public set msdyn_problematicasset_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_problematicasset_SyncErrors = value;
    };
    /**
     * Gets the msdyn_problematicassetid property value. 
     * @returns a string
     */
    public get msdyn_problematicassetid() {
        return this._msdyn_problematicassetid;
    };
    /**
     * Sets the msdyn_problematicassetid property value. 
     * @param value Value to set for the msdyn_problematicassetid property.
     */
    public set msdyn_problematicassetid(value: string | undefined) {
        this._msdyn_problematicassetid = value;
    };
    /**
     * Gets the msdyn_replacementcost property value. 
     * @returns a int64
     */
    public get msdyn_replacementcost() {
        return this._msdyn_replacementcost;
    };
    /**
     * Sets the msdyn_replacementcost property value. 
     * @param value Value to set for the msdyn_replacementcost property.
     */
    public set msdyn_replacementcost(value: number | undefined) {
        this._msdyn_replacementcost = value;
    };
    /**
     * Gets the msdyn_replacementcost_base property value. 
     * @returns a int64
     */
    public get msdyn_replacementcost_base() {
        return this._msdyn_replacementcost_base;
    };
    /**
     * Sets the msdyn_replacementcost_base property value. 
     * @param value Value to set for the msdyn_replacementcost_base property.
     */
    public set msdyn_replacementcost_base(value: number | undefined) {
        this._msdyn_replacementcost_base = value;
    };
    /**
     * Gets the msdyn_replacementsale property value. 
     * @returns a int64
     */
    public get msdyn_replacementsale() {
        return this._msdyn_replacementsale;
    };
    /**
     * Sets the msdyn_replacementsale property value. 
     * @param value Value to set for the msdyn_replacementsale property.
     */
    public set msdyn_replacementsale(value: number | undefined) {
        this._msdyn_replacementsale = value;
    };
    /**
     * Gets the msdyn_replacementsale_base property value. 
     * @returns a int64
     */
    public get msdyn_replacementsale_base() {
        return this._msdyn_replacementsale_base;
    };
    /**
     * Sets the msdyn_replacementsale_base property value. 
     * @param value Value to set for the msdyn_replacementsale_base property.
     */
    public set msdyn_replacementsale_base(value: number | undefined) {
        this._msdyn_replacementsale_base = value;
    };
    /**
     * Gets the msdyn_runid property value. 
     * @returns a string
     */
    public get msdyn_runid() {
        return this._msdyn_runid;
    };
    /**
     * Sets the msdyn_runid property value. 
     * @param value Value to set for the msdyn_runid property.
     */
    public set msdyn_runid(value: string | undefined) {
        this._msdyn_runid = value;
    };
    /**
     * Gets the msdyn_score property value. 
     * @returns a double
     */
    public get msdyn_score() {
        return this._msdyn_score;
    };
    /**
     * Sets the msdyn_score property value. 
     * @param value Value to set for the msdyn_score property.
     */
    public set msdyn_score(value: number | undefined) {
        this._msdyn_score = value;
    };
    /**
     * Gets the msdyn_suggestion property value. 
     * @returns a integer
     */
    public get msdyn_suggestion() {
        return this._msdyn_suggestion;
    };
    /**
     * Sets the msdyn_suggestion property value. 
     * @param value Value to set for the msdyn_suggestion property.
     */
    public set msdyn_suggestion(value: number | undefined) {
        this._msdyn_suggestion = value;
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
        writer.writeStringValue("_msdyn_asset_value", this._msdyn_asset_value);
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
        writer.writeObjectValue<Msdyn_customerasset>("msdyn_asset", this.msdyn_asset);
        writer.writeStringValue("msdyn_assetid", this.msdyn_assetid);
        writer.writeNumberValue("msdyn_breakfixcost", this.msdyn_breakfixcost);
        writer.writeNumberValue("msdyn_breakfixcost_base", this.msdyn_breakfixcost_base);
        writer.writeNumberValue("msdyn_breakfixsale", this.msdyn_breakfixsale);
        writer.writeNumberValue("msdyn_breakfixsale_base", this.msdyn_breakfixsale_base);
        writer.writeNumberValue("msdyn_breakfixworkordercount", this.msdyn_breakfixworkordercount);
        writer.writeNumberValue("msdyn_confidence", this.msdyn_confidence);
        writer.writeNumberValue("msdyn_highertotalcost", this.msdyn_highertotalcost);
        writer.writeNumberValue("msdyn_higherworkordercount", this.msdyn_higherworkordercount);
        writer.writeNumberValue("msdyn_maintenancecost", this.msdyn_maintenancecost);
        writer.writeNumberValue("msdyn_maintenancecost_base", this.msdyn_maintenancecost_base);
        writer.writeNumberValue("msdyn_maintenancesale", this.msdyn_maintenancesale);
        writer.writeNumberValue("msdyn_maintenancesale_base", this.msdyn_maintenancesale_base);
        writer.writeNumberValue("msdyn_maintenanceworkordercount", this.msdyn_maintenanceworkordercount);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_numberofdays", this.msdyn_numberofdays);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_problematicasset_AsyncOperations", this.msdyn_problematicasset_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_problematicasset_BulkDeleteFailures", this.msdyn_problematicasset_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_problematicasset_DuplicateBaseRecord", this.msdyn_problematicasset_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_problematicasset_DuplicateMatchingRecord", this.msdyn_problematicasset_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_problematicasset_MailboxTrackingFolders", this.msdyn_problematicasset_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_problematicasset_PrincipalObjectAttributeAccesses", this.msdyn_problematicasset_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_problematicasset_ProcessSession", this.msdyn_problematicasset_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_problematicasset_SyncErrors", this.msdyn_problematicasset_SyncErrors);
        writer.writeStringValue("msdyn_problematicassetid", this.msdyn_problematicassetid);
        writer.writeNumberValue("msdyn_replacementcost", this.msdyn_replacementcost);
        writer.writeNumberValue("msdyn_replacementcost_base", this.msdyn_replacementcost_base);
        writer.writeNumberValue("msdyn_replacementsale", this.msdyn_replacementsale);
        writer.writeNumberValue("msdyn_replacementsale_base", this.msdyn_replacementsale_base);
        writer.writeStringValue("msdyn_runid", this.msdyn_runid);
        writer.writeNumberValue("msdyn_score", this.msdyn_score);
        writer.writeNumberValue("msdyn_suggestion", this.msdyn_suggestion);
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
