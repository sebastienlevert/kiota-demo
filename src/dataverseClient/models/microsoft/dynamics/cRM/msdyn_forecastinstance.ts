import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createGoalFromDiscriminatorValue} from './createGoalFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_forecastdefinitionFromDiscriminatorValue} from './createMsdyn_forecastdefinitionFromDiscriminatorValue';
import {createMsdyn_forecastinstanceFromDiscriminatorValue} from './createMsdyn_forecastinstanceFromDiscriminatorValue';
import {createMsdyn_forecastrecurrenceFromDiscriminatorValue} from './createMsdyn_forecastrecurrenceFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Goal, Mailboxtrackingfolder, Msdyn_forecastdefinition, Msdyn_forecastrecurrence, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_forecastinstance extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_forecastdefinitionid_value?: string | undefined;
    private __msdyn_forecastparentid_value?: string | undefined;
    private __msdyn_forecastrecurrenceid_value?: string | undefined;
    private __msdyn_matchinggoalid_value?: string | undefined;
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
    private _msdyn_actualamount?: number | undefined;
    private _msdyn_actualamount_base?: number | undefined;
    private _msdyn_bestcaseamount?: number | undefined;
    private _msdyn_bestcaseamount_base?: number | undefined;
    private _msdyn_committedamount?: number | undefined;
    private _msdyn_committedamount_base?: number | undefined;
    private _msdyn_forecastdefinitionid?: Msdyn_forecastdefinition | undefined;
    private _msdyn_forecastinstance_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_forecastinstance_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_forecastinstance_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_forecastinstance_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_forecastinstance_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_forecastinstance_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_forecastinstance_ProcessSession?: Processsession[] | undefined;
    private _msdyn_forecastinstance_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_forecastinstanceid?: string | undefined;
    private _msdyn_forecastinstancetype?: number | undefined;
    private _msdyn_forecastname?: string | undefined;
    private _msdyn_forecastparentid?: Msdyn_forecastinstance | undefined;
    private _msdyn_forecastrecurrenceid?: Msdyn_forecastrecurrence | undefined;
    private _msdyn_ismanualbestcase?: number | undefined;
    private _msdyn_ismanualcommitted?: number | undefined;
    private _msdyn_ismanualpipeline?: number | undefined;
    private _msdyn_isquotasourcemanual?: boolean | undefined;
    private _msdyn_level?: number | undefined;
    private _msdyn_manualbestcaseamount?: number | undefined;
    private _msdyn_manualbestcaseamount_base?: number | undefined;
    private _msdyn_manualcommittedamount?: number | undefined;
    private _msdyn_manualcommittedamount_base?: number | undefined;
    private _msdyn_manualpipelineamount?: number | undefined;
    private _msdyn_manualpipelineamount_base?: number | undefined;
    private _msdyn_matchinggoalid?: Goal | undefined;
    private _msdyn_msdyn_forecastinstance_msdyn_forecastinstance?: Msdyn_forecastinstance[] | undefined;
    private _msdyn_percentageachieved?: number | undefined;
    private _msdyn_pipelineamount?: number | undefined;
    private _msdyn_pipelineamount_base?: number | undefined;
    private _msdyn_recurrenceindex?: number | undefined;
    private _msdyn_targetamount?: number | undefined;
    private _msdyn_targetamount_base?: number | undefined;
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
     * Gets the _msdyn_forecastdefinitionid_value property value. 
     * @returns a string
     */
    public get _msdyn_forecastdefinitionid_value() {
        return this.__msdyn_forecastdefinitionid_value;
    };
    /**
     * Sets the _msdyn_forecastdefinitionid_value property value. 
     * @param value Value to set for the _msdyn_forecastdefinitionid_value property.
     */
    public set _msdyn_forecastdefinitionid_value(value: string | undefined) {
        this.__msdyn_forecastdefinitionid_value = value;
    };
    /**
     * Gets the _msdyn_forecastparentid_value property value. 
     * @returns a string
     */
    public get _msdyn_forecastparentid_value() {
        return this.__msdyn_forecastparentid_value;
    };
    /**
     * Sets the _msdyn_forecastparentid_value property value. 
     * @param value Value to set for the _msdyn_forecastparentid_value property.
     */
    public set _msdyn_forecastparentid_value(value: string | undefined) {
        this.__msdyn_forecastparentid_value = value;
    };
    /**
     * Gets the _msdyn_forecastrecurrenceid_value property value. 
     * @returns a string
     */
    public get _msdyn_forecastrecurrenceid_value() {
        return this.__msdyn_forecastrecurrenceid_value;
    };
    /**
     * Sets the _msdyn_forecastrecurrenceid_value property value. 
     * @param value Value to set for the _msdyn_forecastrecurrenceid_value property.
     */
    public set _msdyn_forecastrecurrenceid_value(value: string | undefined) {
        this.__msdyn_forecastrecurrenceid_value = value;
    };
    /**
     * Gets the _msdyn_matchinggoalid_value property value. 
     * @returns a string
     */
    public get _msdyn_matchinggoalid_value() {
        return this.__msdyn_matchinggoalid_value;
    };
    /**
     * Sets the _msdyn_matchinggoalid_value property value. 
     * @param value Value to set for the _msdyn_matchinggoalid_value property.
     */
    public set _msdyn_matchinggoalid_value(value: string | undefined) {
        this.__msdyn_matchinggoalid_value = value;
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
     * Instantiates a new msdyn_forecastinstance and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_forecastinstance)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_forecastinstance)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_forecastinstance)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_forecastinstance)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_forecastdefinitionid_value": (o, n) => { (o as unknown as Msdyn_forecastinstance)._msdyn_forecastdefinitionid_value = n.getStringValue(); },
            "_msdyn_forecastparentid_value": (o, n) => { (o as unknown as Msdyn_forecastinstance)._msdyn_forecastparentid_value = n.getStringValue(); },
            "_msdyn_forecastrecurrenceid_value": (o, n) => { (o as unknown as Msdyn_forecastinstance)._msdyn_forecastrecurrenceid_value = n.getStringValue(); },
            "_msdyn_matchinggoalid_value": (o, n) => { (o as unknown as Msdyn_forecastinstance)._msdyn_matchinggoalid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_forecastinstance)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_forecastinstance)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_forecastinstance)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_forecastinstance)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_forecastinstance)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_forecastinstance).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_forecastinstance).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_forecastinstance).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_forecastinstance).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_forecastinstance).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_forecastinstance).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_forecastinstance).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_forecastinstance).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_actualamount": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_actualamount = n.getNumberValue(); },
            "msdyn_actualamount_base": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_actualamount_base = n.getNumberValue(); },
            "msdyn_bestcaseamount": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_bestcaseamount = n.getNumberValue(); },
            "msdyn_bestcaseamount_base": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_bestcaseamount_base = n.getNumberValue(); },
            "msdyn_committedamount": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_committedamount = n.getNumberValue(); },
            "msdyn_committedamount_base": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_committedamount_base = n.getNumberValue(); },
            "msdyn_forecastdefinitionid": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastdefinitionid = n.getObjectValue<Msdyn_forecastdefinition>(createMsdyn_forecastdefinitionFromDiscriminatorValue); },
            "msdyn_forecastinstance_AsyncOperations": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastinstance_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_forecastinstance_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastinstance_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_forecastinstance_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastinstance_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_forecastinstance_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastinstance_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_forecastinstance_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastinstance_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_forecastinstance_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastinstance_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_forecastinstance_ProcessSession": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastinstance_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_forecastinstance_SyncErrors": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastinstance_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_forecastinstanceid": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastinstanceid = n.getStringValue(); },
            "msdyn_forecastinstancetype": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastinstancetype = n.getNumberValue(); },
            "msdyn_forecastname": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastname = n.getStringValue(); },
            "msdyn_forecastparentid": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastparentid = n.getObjectValue<Msdyn_forecastinstance>(createMsdyn_forecastinstanceFromDiscriminatorValue); },
            "msdyn_forecastrecurrenceid": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_forecastrecurrenceid = n.getObjectValue<Msdyn_forecastrecurrence>(createMsdyn_forecastrecurrenceFromDiscriminatorValue); },
            "msdyn_ismanualbestcase": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_ismanualbestcase = n.getNumberValue(); },
            "msdyn_ismanualcommitted": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_ismanualcommitted = n.getNumberValue(); },
            "msdyn_ismanualpipeline": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_ismanualpipeline = n.getNumberValue(); },
            "msdyn_isquotasourcemanual": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_isquotasourcemanual = n.getBooleanValue(); },
            "msdyn_level": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_level = n.getNumberValue(); },
            "msdyn_manualbestcaseamount": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_manualbestcaseamount = n.getNumberValue(); },
            "msdyn_manualbestcaseamount_base": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_manualbestcaseamount_base = n.getNumberValue(); },
            "msdyn_manualcommittedamount": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_manualcommittedamount = n.getNumberValue(); },
            "msdyn_manualcommittedamount_base": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_manualcommittedamount_base = n.getNumberValue(); },
            "msdyn_manualpipelineamount": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_manualpipelineamount = n.getNumberValue(); },
            "msdyn_manualpipelineamount_base": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_manualpipelineamount_base = n.getNumberValue(); },
            "msdyn_matchinggoalid": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_matchinggoalid = n.getObjectValue<Goal>(createGoalFromDiscriminatorValue); },
            "msdyn_msdyn_forecastinstance_msdyn_forecastinstance": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_msdyn_forecastinstance_msdyn_forecastinstance = n.getCollectionOfObjectValues<Msdyn_forecastinstance>(createMsdyn_forecastinstanceFromDiscriminatorValue); },
            "msdyn_percentageachieved": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_percentageachieved = n.getNumberValue(); },
            "msdyn_pipelineamount": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_pipelineamount = n.getNumberValue(); },
            "msdyn_pipelineamount_base": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_pipelineamount_base = n.getNumberValue(); },
            "msdyn_recurrenceindex": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_recurrenceindex = n.getNumberValue(); },
            "msdyn_targetamount": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_targetamount = n.getNumberValue(); },
            "msdyn_targetamount_base": (o, n) => { (o as unknown as Msdyn_forecastinstance).msdyn_targetamount_base = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_forecastinstance).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_forecastinstance).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_forecastinstance).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_forecastinstance).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_forecastinstance).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_forecastinstance).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_forecastinstance).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_forecastinstance).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_forecastinstance).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_forecastinstance).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_forecastinstance).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_actualamount property value. 
     * @returns a int64
     */
    public get msdyn_actualamount() {
        return this._msdyn_actualamount;
    };
    /**
     * Sets the msdyn_actualamount property value. 
     * @param value Value to set for the msdyn_actualamount property.
     */
    public set msdyn_actualamount(value: number | undefined) {
        this._msdyn_actualamount = value;
    };
    /**
     * Gets the msdyn_actualamount_base property value. 
     * @returns a int64
     */
    public get msdyn_actualamount_base() {
        return this._msdyn_actualamount_base;
    };
    /**
     * Sets the msdyn_actualamount_base property value. 
     * @param value Value to set for the msdyn_actualamount_base property.
     */
    public set msdyn_actualamount_base(value: number | undefined) {
        this._msdyn_actualamount_base = value;
    };
    /**
     * Gets the msdyn_bestcaseamount property value. 
     * @returns a int64
     */
    public get msdyn_bestcaseamount() {
        return this._msdyn_bestcaseamount;
    };
    /**
     * Sets the msdyn_bestcaseamount property value. 
     * @param value Value to set for the msdyn_bestcaseamount property.
     */
    public set msdyn_bestcaseamount(value: number | undefined) {
        this._msdyn_bestcaseamount = value;
    };
    /**
     * Gets the msdyn_bestcaseamount_base property value. 
     * @returns a int64
     */
    public get msdyn_bestcaseamount_base() {
        return this._msdyn_bestcaseamount_base;
    };
    /**
     * Sets the msdyn_bestcaseamount_base property value. 
     * @param value Value to set for the msdyn_bestcaseamount_base property.
     */
    public set msdyn_bestcaseamount_base(value: number | undefined) {
        this._msdyn_bestcaseamount_base = value;
    };
    /**
     * Gets the msdyn_committedamount property value. 
     * @returns a int64
     */
    public get msdyn_committedamount() {
        return this._msdyn_committedamount;
    };
    /**
     * Sets the msdyn_committedamount property value. 
     * @param value Value to set for the msdyn_committedamount property.
     */
    public set msdyn_committedamount(value: number | undefined) {
        this._msdyn_committedamount = value;
    };
    /**
     * Gets the msdyn_committedamount_base property value. 
     * @returns a int64
     */
    public get msdyn_committedamount_base() {
        return this._msdyn_committedamount_base;
    };
    /**
     * Sets the msdyn_committedamount_base property value. 
     * @param value Value to set for the msdyn_committedamount_base property.
     */
    public set msdyn_committedamount_base(value: number | undefined) {
        this._msdyn_committedamount_base = value;
    };
    /**
     * Gets the msdyn_forecastdefinitionid property value. 
     * @returns a msdyn_forecastdefinition
     */
    public get msdyn_forecastdefinitionid() {
        return this._msdyn_forecastdefinitionid;
    };
    /**
     * Sets the msdyn_forecastdefinitionid property value. 
     * @param value Value to set for the msdyn_forecastdefinitionid property.
     */
    public set msdyn_forecastdefinitionid(value: Msdyn_forecastdefinition | undefined) {
        this._msdyn_forecastdefinitionid = value;
    };
    /**
     * Gets the msdyn_forecastinstance_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_forecastinstance_AsyncOperations() {
        return this._msdyn_forecastinstance_AsyncOperations;
    };
    /**
     * Sets the msdyn_forecastinstance_AsyncOperations property value. 
     * @param value Value to set for the msdyn_forecastinstance_AsyncOperations property.
     */
    public set msdyn_forecastinstance_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_forecastinstance_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_forecastinstance_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_forecastinstance_BulkDeleteFailures() {
        return this._msdyn_forecastinstance_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_forecastinstance_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_forecastinstance_BulkDeleteFailures property.
     */
    public set msdyn_forecastinstance_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_forecastinstance_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_forecastinstance_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_forecastinstance_DuplicateBaseRecord() {
        return this._msdyn_forecastinstance_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_forecastinstance_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_forecastinstance_DuplicateBaseRecord property.
     */
    public set msdyn_forecastinstance_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_forecastinstance_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_forecastinstance_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_forecastinstance_DuplicateMatchingRecord() {
        return this._msdyn_forecastinstance_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_forecastinstance_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_forecastinstance_DuplicateMatchingRecord property.
     */
    public set msdyn_forecastinstance_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_forecastinstance_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_forecastinstance_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_forecastinstance_MailboxTrackingFolders() {
        return this._msdyn_forecastinstance_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_forecastinstance_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_forecastinstance_MailboxTrackingFolders property.
     */
    public set msdyn_forecastinstance_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_forecastinstance_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_forecastinstance_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_forecastinstance_PrincipalObjectAttributeAccesses() {
        return this._msdyn_forecastinstance_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_forecastinstance_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_forecastinstance_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_forecastinstance_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_forecastinstance_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_forecastinstance_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_forecastinstance_ProcessSession() {
        return this._msdyn_forecastinstance_ProcessSession;
    };
    /**
     * Sets the msdyn_forecastinstance_ProcessSession property value. 
     * @param value Value to set for the msdyn_forecastinstance_ProcessSession property.
     */
    public set msdyn_forecastinstance_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_forecastinstance_ProcessSession = value;
    };
    /**
     * Gets the msdyn_forecastinstance_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_forecastinstance_SyncErrors() {
        return this._msdyn_forecastinstance_SyncErrors;
    };
    /**
     * Sets the msdyn_forecastinstance_SyncErrors property value. 
     * @param value Value to set for the msdyn_forecastinstance_SyncErrors property.
     */
    public set msdyn_forecastinstance_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_forecastinstance_SyncErrors = value;
    };
    /**
     * Gets the msdyn_forecastinstanceid property value. 
     * @returns a string
     */
    public get msdyn_forecastinstanceid() {
        return this._msdyn_forecastinstanceid;
    };
    /**
     * Sets the msdyn_forecastinstanceid property value. 
     * @param value Value to set for the msdyn_forecastinstanceid property.
     */
    public set msdyn_forecastinstanceid(value: string | undefined) {
        this._msdyn_forecastinstanceid = value;
    };
    /**
     * Gets the msdyn_forecastinstancetype property value. 
     * @returns a integer
     */
    public get msdyn_forecastinstancetype() {
        return this._msdyn_forecastinstancetype;
    };
    /**
     * Sets the msdyn_forecastinstancetype property value. 
     * @param value Value to set for the msdyn_forecastinstancetype property.
     */
    public set msdyn_forecastinstancetype(value: number | undefined) {
        this._msdyn_forecastinstancetype = value;
    };
    /**
     * Gets the msdyn_forecastname property value. 
     * @returns a string
     */
    public get msdyn_forecastname() {
        return this._msdyn_forecastname;
    };
    /**
     * Sets the msdyn_forecastname property value. 
     * @param value Value to set for the msdyn_forecastname property.
     */
    public set msdyn_forecastname(value: string | undefined) {
        this._msdyn_forecastname = value;
    };
    /**
     * Gets the msdyn_forecastparentid property value. 
     * @returns a msdyn_forecastinstance
     */
    public get msdyn_forecastparentid() {
        return this._msdyn_forecastparentid;
    };
    /**
     * Sets the msdyn_forecastparentid property value. 
     * @param value Value to set for the msdyn_forecastparentid property.
     */
    public set msdyn_forecastparentid(value: Msdyn_forecastinstance | undefined) {
        this._msdyn_forecastparentid = value;
    };
    /**
     * Gets the msdyn_forecastrecurrenceid property value. 
     * @returns a msdyn_forecastrecurrence
     */
    public get msdyn_forecastrecurrenceid() {
        return this._msdyn_forecastrecurrenceid;
    };
    /**
     * Sets the msdyn_forecastrecurrenceid property value. 
     * @param value Value to set for the msdyn_forecastrecurrenceid property.
     */
    public set msdyn_forecastrecurrenceid(value: Msdyn_forecastrecurrence | undefined) {
        this._msdyn_forecastrecurrenceid = value;
    };
    /**
     * Gets the msdyn_ismanualbestcase property value. 
     * @returns a integer
     */
    public get msdyn_ismanualbestcase() {
        return this._msdyn_ismanualbestcase;
    };
    /**
     * Sets the msdyn_ismanualbestcase property value. 
     * @param value Value to set for the msdyn_ismanualbestcase property.
     */
    public set msdyn_ismanualbestcase(value: number | undefined) {
        this._msdyn_ismanualbestcase = value;
    };
    /**
     * Gets the msdyn_ismanualcommitted property value. 
     * @returns a integer
     */
    public get msdyn_ismanualcommitted() {
        return this._msdyn_ismanualcommitted;
    };
    /**
     * Sets the msdyn_ismanualcommitted property value. 
     * @param value Value to set for the msdyn_ismanualcommitted property.
     */
    public set msdyn_ismanualcommitted(value: number | undefined) {
        this._msdyn_ismanualcommitted = value;
    };
    /**
     * Gets the msdyn_ismanualpipeline property value. 
     * @returns a integer
     */
    public get msdyn_ismanualpipeline() {
        return this._msdyn_ismanualpipeline;
    };
    /**
     * Sets the msdyn_ismanualpipeline property value. 
     * @param value Value to set for the msdyn_ismanualpipeline property.
     */
    public set msdyn_ismanualpipeline(value: number | undefined) {
        this._msdyn_ismanualpipeline = value;
    };
    /**
     * Gets the msdyn_isquotasourcemanual property value. 
     * @returns a boolean
     */
    public get msdyn_isquotasourcemanual() {
        return this._msdyn_isquotasourcemanual;
    };
    /**
     * Sets the msdyn_isquotasourcemanual property value. 
     * @param value Value to set for the msdyn_isquotasourcemanual property.
     */
    public set msdyn_isquotasourcemanual(value: boolean | undefined) {
        this._msdyn_isquotasourcemanual = value;
    };
    /**
     * Gets the msdyn_level property value. 
     * @returns a integer
     */
    public get msdyn_level() {
        return this._msdyn_level;
    };
    /**
     * Sets the msdyn_level property value. 
     * @param value Value to set for the msdyn_level property.
     */
    public set msdyn_level(value: number | undefined) {
        this._msdyn_level = value;
    };
    /**
     * Gets the msdyn_manualbestcaseamount property value. 
     * @returns a int64
     */
    public get msdyn_manualbestcaseamount() {
        return this._msdyn_manualbestcaseamount;
    };
    /**
     * Sets the msdyn_manualbestcaseamount property value. 
     * @param value Value to set for the msdyn_manualbestcaseamount property.
     */
    public set msdyn_manualbestcaseamount(value: number | undefined) {
        this._msdyn_manualbestcaseamount = value;
    };
    /**
     * Gets the msdyn_manualbestcaseamount_base property value. 
     * @returns a int64
     */
    public get msdyn_manualbestcaseamount_base() {
        return this._msdyn_manualbestcaseamount_base;
    };
    /**
     * Sets the msdyn_manualbestcaseamount_base property value. 
     * @param value Value to set for the msdyn_manualbestcaseamount_base property.
     */
    public set msdyn_manualbestcaseamount_base(value: number | undefined) {
        this._msdyn_manualbestcaseamount_base = value;
    };
    /**
     * Gets the msdyn_manualcommittedamount property value. 
     * @returns a int64
     */
    public get msdyn_manualcommittedamount() {
        return this._msdyn_manualcommittedamount;
    };
    /**
     * Sets the msdyn_manualcommittedamount property value. 
     * @param value Value to set for the msdyn_manualcommittedamount property.
     */
    public set msdyn_manualcommittedamount(value: number | undefined) {
        this._msdyn_manualcommittedamount = value;
    };
    /**
     * Gets the msdyn_manualcommittedamount_base property value. 
     * @returns a int64
     */
    public get msdyn_manualcommittedamount_base() {
        return this._msdyn_manualcommittedamount_base;
    };
    /**
     * Sets the msdyn_manualcommittedamount_base property value. 
     * @param value Value to set for the msdyn_manualcommittedamount_base property.
     */
    public set msdyn_manualcommittedamount_base(value: number | undefined) {
        this._msdyn_manualcommittedamount_base = value;
    };
    /**
     * Gets the msdyn_manualpipelineamount property value. 
     * @returns a int64
     */
    public get msdyn_manualpipelineamount() {
        return this._msdyn_manualpipelineamount;
    };
    /**
     * Sets the msdyn_manualpipelineamount property value. 
     * @param value Value to set for the msdyn_manualpipelineamount property.
     */
    public set msdyn_manualpipelineamount(value: number | undefined) {
        this._msdyn_manualpipelineamount = value;
    };
    /**
     * Gets the msdyn_manualpipelineamount_base property value. 
     * @returns a int64
     */
    public get msdyn_manualpipelineamount_base() {
        return this._msdyn_manualpipelineamount_base;
    };
    /**
     * Sets the msdyn_manualpipelineamount_base property value. 
     * @param value Value to set for the msdyn_manualpipelineamount_base property.
     */
    public set msdyn_manualpipelineamount_base(value: number | undefined) {
        this._msdyn_manualpipelineamount_base = value;
    };
    /**
     * Gets the msdyn_matchinggoalid property value. 
     * @returns a goal
     */
    public get msdyn_matchinggoalid() {
        return this._msdyn_matchinggoalid;
    };
    /**
     * Sets the msdyn_matchinggoalid property value. 
     * @param value Value to set for the msdyn_matchinggoalid property.
     */
    public set msdyn_matchinggoalid(value: Goal | undefined) {
        this._msdyn_matchinggoalid = value;
    };
    /**
     * Gets the msdyn_msdyn_forecastinstance_msdyn_forecastinstance property value. 
     * @returns a msdyn_forecastinstance
     */
    public get msdyn_msdyn_forecastinstance_msdyn_forecastinstance() {
        return this._msdyn_msdyn_forecastinstance_msdyn_forecastinstance;
    };
    /**
     * Sets the msdyn_msdyn_forecastinstance_msdyn_forecastinstance property value. 
     * @param value Value to set for the msdyn_msdyn_forecastinstance_msdyn_forecastinstance property.
     */
    public set msdyn_msdyn_forecastinstance_msdyn_forecastinstance(value: Msdyn_forecastinstance[] | undefined) {
        this._msdyn_msdyn_forecastinstance_msdyn_forecastinstance = value;
    };
    /**
     * Gets the msdyn_percentageachieved property value. 
     * @returns a int64
     */
    public get msdyn_percentageachieved() {
        return this._msdyn_percentageachieved;
    };
    /**
     * Sets the msdyn_percentageachieved property value. 
     * @param value Value to set for the msdyn_percentageachieved property.
     */
    public set msdyn_percentageachieved(value: number | undefined) {
        this._msdyn_percentageachieved = value;
    };
    /**
     * Gets the msdyn_pipelineamount property value. 
     * @returns a int64
     */
    public get msdyn_pipelineamount() {
        return this._msdyn_pipelineamount;
    };
    /**
     * Sets the msdyn_pipelineamount property value. 
     * @param value Value to set for the msdyn_pipelineamount property.
     */
    public set msdyn_pipelineamount(value: number | undefined) {
        this._msdyn_pipelineamount = value;
    };
    /**
     * Gets the msdyn_pipelineamount_base property value. 
     * @returns a int64
     */
    public get msdyn_pipelineamount_base() {
        return this._msdyn_pipelineamount_base;
    };
    /**
     * Sets the msdyn_pipelineamount_base property value. 
     * @param value Value to set for the msdyn_pipelineamount_base property.
     */
    public set msdyn_pipelineamount_base(value: number | undefined) {
        this._msdyn_pipelineamount_base = value;
    };
    /**
     * Gets the msdyn_recurrenceindex property value. 
     * @returns a integer
     */
    public get msdyn_recurrenceindex() {
        return this._msdyn_recurrenceindex;
    };
    /**
     * Sets the msdyn_recurrenceindex property value. 
     * @param value Value to set for the msdyn_recurrenceindex property.
     */
    public set msdyn_recurrenceindex(value: number | undefined) {
        this._msdyn_recurrenceindex = value;
    };
    /**
     * Gets the msdyn_targetamount property value. 
     * @returns a int64
     */
    public get msdyn_targetamount() {
        return this._msdyn_targetamount;
    };
    /**
     * Sets the msdyn_targetamount property value. 
     * @param value Value to set for the msdyn_targetamount property.
     */
    public set msdyn_targetamount(value: number | undefined) {
        this._msdyn_targetamount = value;
    };
    /**
     * Gets the msdyn_targetamount_base property value. 
     * @returns a int64
     */
    public get msdyn_targetamount_base() {
        return this._msdyn_targetamount_base;
    };
    /**
     * Sets the msdyn_targetamount_base property value. 
     * @param value Value to set for the msdyn_targetamount_base property.
     */
    public set msdyn_targetamount_base(value: number | undefined) {
        this._msdyn_targetamount_base = value;
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
        writer.writeStringValue("_msdyn_forecastdefinitionid_value", this._msdyn_forecastdefinitionid_value);
        writer.writeStringValue("_msdyn_forecastparentid_value", this._msdyn_forecastparentid_value);
        writer.writeStringValue("_msdyn_forecastrecurrenceid_value", this._msdyn_forecastrecurrenceid_value);
        writer.writeStringValue("_msdyn_matchinggoalid_value", this._msdyn_matchinggoalid_value);
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
        writer.writeNumberValue("msdyn_actualamount", this.msdyn_actualamount);
        writer.writeNumberValue("msdyn_actualamount_base", this.msdyn_actualamount_base);
        writer.writeNumberValue("msdyn_bestcaseamount", this.msdyn_bestcaseamount);
        writer.writeNumberValue("msdyn_bestcaseamount_base", this.msdyn_bestcaseamount_base);
        writer.writeNumberValue("msdyn_committedamount", this.msdyn_committedamount);
        writer.writeNumberValue("msdyn_committedamount_base", this.msdyn_committedamount_base);
        writer.writeObjectValue<Msdyn_forecastdefinition>("msdyn_forecastdefinitionid", this.msdyn_forecastdefinitionid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_forecastinstance_AsyncOperations", this.msdyn_forecastinstance_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_forecastinstance_BulkDeleteFailures", this.msdyn_forecastinstance_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_forecastinstance_DuplicateBaseRecord", this.msdyn_forecastinstance_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_forecastinstance_DuplicateMatchingRecord", this.msdyn_forecastinstance_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_forecastinstance_MailboxTrackingFolders", this.msdyn_forecastinstance_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_forecastinstance_PrincipalObjectAttributeAccesses", this.msdyn_forecastinstance_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_forecastinstance_ProcessSession", this.msdyn_forecastinstance_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_forecastinstance_SyncErrors", this.msdyn_forecastinstance_SyncErrors);
        writer.writeStringValue("msdyn_forecastinstanceid", this.msdyn_forecastinstanceid);
        writer.writeNumberValue("msdyn_forecastinstancetype", this.msdyn_forecastinstancetype);
        writer.writeStringValue("msdyn_forecastname", this.msdyn_forecastname);
        writer.writeObjectValue<Msdyn_forecastinstance>("msdyn_forecastparentid", this.msdyn_forecastparentid);
        writer.writeObjectValue<Msdyn_forecastrecurrence>("msdyn_forecastrecurrenceid", this.msdyn_forecastrecurrenceid);
        writer.writeNumberValue("msdyn_ismanualbestcase", this.msdyn_ismanualbestcase);
        writer.writeNumberValue("msdyn_ismanualcommitted", this.msdyn_ismanualcommitted);
        writer.writeNumberValue("msdyn_ismanualpipeline", this.msdyn_ismanualpipeline);
        writer.writeBooleanValue("msdyn_isquotasourcemanual", this.msdyn_isquotasourcemanual);
        writer.writeNumberValue("msdyn_level", this.msdyn_level);
        writer.writeNumberValue("msdyn_manualbestcaseamount", this.msdyn_manualbestcaseamount);
        writer.writeNumberValue("msdyn_manualbestcaseamount_base", this.msdyn_manualbestcaseamount_base);
        writer.writeNumberValue("msdyn_manualcommittedamount", this.msdyn_manualcommittedamount);
        writer.writeNumberValue("msdyn_manualcommittedamount_base", this.msdyn_manualcommittedamount_base);
        writer.writeNumberValue("msdyn_manualpipelineamount", this.msdyn_manualpipelineamount);
        writer.writeNumberValue("msdyn_manualpipelineamount_base", this.msdyn_manualpipelineamount_base);
        writer.writeObjectValue<Goal>("msdyn_matchinggoalid", this.msdyn_matchinggoalid);
        writer.writeCollectionOfObjectValues<Msdyn_forecastinstance>("msdyn_msdyn_forecastinstance_msdyn_forecastinstance", this.msdyn_msdyn_forecastinstance_msdyn_forecastinstance);
        writer.writeNumberValue("msdyn_percentageachieved", this.msdyn_percentageachieved);
        writer.writeNumberValue("msdyn_pipelineamount", this.msdyn_pipelineamount);
        writer.writeNumberValue("msdyn_pipelineamount_base", this.msdyn_pipelineamount_base);
        writer.writeNumberValue("msdyn_recurrenceindex", this.msdyn_recurrenceindex);
        writer.writeNumberValue("msdyn_targetamount", this.msdyn_targetamount);
        writer.writeNumberValue("msdyn_targetamount_base", this.msdyn_targetamount_base);
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
