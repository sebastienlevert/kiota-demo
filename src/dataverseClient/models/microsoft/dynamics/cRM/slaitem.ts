import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {createMsdyn_migrationtrackerFromDiscriminatorValue} from './createMsdyn_migrationtrackerFromDiscriminatorValue';
import {createMsdyn_slakpiFromDiscriminatorValue} from './createMsdyn_slakpiFromDiscriminatorValue';
import {createSlaFromDiscriminatorValue} from './createSlaFromDiscriminatorValue';
import {createSlakpiinstanceFromDiscriminatorValue} from './createSlakpiinstanceFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {Calendar, Crmbaseentity, Msdyn_migrationtracker, Msdyn_slakpi, Sla, Slakpiinstance, Syncerror, Systemuser, Transactioncurrency, Workflow} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Slaitem extends Crmbaseentity implements Parsable {
    private __businesshoursid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_slakpiid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __slaid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private __workflowid_value?: string | undefined;
    private _actionflowuniquename?: string | undefined;
    private _actionurl?: string | undefined;
    private _allowpauseresume?: boolean | undefined;
    private _applicableentity?: string | undefined;
    private _applicablewhenxml?: string | undefined;
    private _businesshoursid?: Calendar | undefined;
    private _changedattributelist?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _exchangerate?: number | undefined;
    private _failureafter?: number | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_advancedpauseconfiguration?: boolean | undefined;
    private _msdyn_migrationtracker_LegacySLAItem_slaitem?: Msdyn_migrationtracker[] | undefined;
    private _msdyn_migrationtracker_ModernSLAItem_slaitem?: Msdyn_migrationtracker[] | undefined;
    private _msdyn_pauseconfigurationxml?: string | undefined;
    private _msdyn_slaitem_slakpiinstance?: Slakpiinstance[] | undefined;
    private _msdyn_SLAKPIID?: Msdyn_slakpi | undefined;
    private _name?: string | undefined;
    private _overwritetime?: Date | undefined;
    private _relatedfield?: string | undefined;
    private _sequencenumber?: number | undefined;
    private _slaid?: Sla | undefined;
    private _sLAItem_SyncErrors?: Syncerror[] | undefined;
    private _slaitemid?: string | undefined;
    private _slaitemidunique?: string | undefined;
    private _solutionid?: string | undefined;
    private _successconditionsxml?: string | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _versionnumber?: number | undefined;
    private _warnafter?: number | undefined;
    private _workflowid?: Workflow | undefined;
    /**
     * Gets the _businesshoursid_value property value. 
     * @returns a string
     */
    public get _businesshoursid_value() {
        return this.__businesshoursid_value;
    };
    /**
     * Sets the _businesshoursid_value property value. 
     * @param value Value to set for the _businesshoursid_value property.
     */
    public set _businesshoursid_value(value: string | undefined) {
        this.__businesshoursid_value = value;
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
     * Gets the _msdyn_slakpiid_value property value. 
     * @returns a string
     */
    public get _msdyn_slakpiid_value() {
        return this.__msdyn_slakpiid_value;
    };
    /**
     * Sets the _msdyn_slakpiid_value property value. 
     * @param value Value to set for the _msdyn_slakpiid_value property.
     */
    public set _msdyn_slakpiid_value(value: string | undefined) {
        this.__msdyn_slakpiid_value = value;
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
     * Gets the _slaid_value property value. 
     * @returns a string
     */
    public get _slaid_value() {
        return this.__slaid_value;
    };
    /**
     * Sets the _slaid_value property value. 
     * @param value Value to set for the _slaid_value property.
     */
    public set _slaid_value(value: string | undefined) {
        this.__slaid_value = value;
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
     * Gets the _workflowid_value property value. 
     * @returns a string
     */
    public get _workflowid_value() {
        return this.__workflowid_value;
    };
    /**
     * Sets the _workflowid_value property value. 
     * @param value Value to set for the _workflowid_value property.
     */
    public set _workflowid_value(value: string | undefined) {
        this.__workflowid_value = value;
    };
    /**
     * Gets the actionflowuniquename property value. 
     * @returns a string
     */
    public get actionflowuniquename() {
        return this._actionflowuniquename;
    };
    /**
     * Sets the actionflowuniquename property value. 
     * @param value Value to set for the actionflowuniquename property.
     */
    public set actionflowuniquename(value: string | undefined) {
        this._actionflowuniquename = value;
    };
    /**
     * Gets the actionurl property value. 
     * @returns a string
     */
    public get actionurl() {
        return this._actionurl;
    };
    /**
     * Sets the actionurl property value. 
     * @param value Value to set for the actionurl property.
     */
    public set actionurl(value: string | undefined) {
        this._actionurl = value;
    };
    /**
     * Gets the allowpauseresume property value. 
     * @returns a boolean
     */
    public get allowpauseresume() {
        return this._allowpauseresume;
    };
    /**
     * Sets the allowpauseresume property value. 
     * @param value Value to set for the allowpauseresume property.
     */
    public set allowpauseresume(value: boolean | undefined) {
        this._allowpauseresume = value;
    };
    /**
     * Gets the applicableentity property value. 
     * @returns a string
     */
    public get applicableentity() {
        return this._applicableentity;
    };
    /**
     * Sets the applicableentity property value. 
     * @param value Value to set for the applicableentity property.
     */
    public set applicableentity(value: string | undefined) {
        this._applicableentity = value;
    };
    /**
     * Gets the applicablewhenxml property value. 
     * @returns a string
     */
    public get applicablewhenxml() {
        return this._applicablewhenxml;
    };
    /**
     * Sets the applicablewhenxml property value. 
     * @param value Value to set for the applicablewhenxml property.
     */
    public set applicablewhenxml(value: string | undefined) {
        this._applicablewhenxml = value;
    };
    /**
     * Gets the businesshoursid property value. 
     * @returns a calendar
     */
    public get businesshoursid() {
        return this._businesshoursid;
    };
    /**
     * Sets the businesshoursid property value. 
     * @param value Value to set for the businesshoursid property.
     */
    public set businesshoursid(value: Calendar | undefined) {
        this._businesshoursid = value;
    };
    /**
     * Gets the changedattributelist property value. 
     * @returns a string
     */
    public get changedattributelist() {
        return this._changedattributelist;
    };
    /**
     * Sets the changedattributelist property value. 
     * @param value Value to set for the changedattributelist property.
     */
    public set changedattributelist(value: string | undefined) {
        this._changedattributelist = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new slaitem and sets the default values.
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
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
     * Gets the failureafter property value. 
     * @returns a integer
     */
    public get failureafter() {
        return this._failureafter;
    };
    /**
     * Sets the failureafter property value. 
     * @param value Value to set for the failureafter property.
     */
    public set failureafter(value: number | undefined) {
        this._failureafter = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_businesshoursid_value": (o, n) => { (o as unknown as Slaitem)._businesshoursid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Slaitem)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Slaitem)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Slaitem)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Slaitem)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_slakpiid_value": (o, n) => { (o as unknown as Slaitem)._msdyn_slakpiid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Slaitem)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Slaitem)._owningbusinessunit_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Slaitem)._owninguser_value = n.getStringValue(); },
            "_slaid_value": (o, n) => { (o as unknown as Slaitem)._slaid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Slaitem)._transactioncurrencyid_value = n.getStringValue(); },
            "_workflowid_value": (o, n) => { (o as unknown as Slaitem)._workflowid_value = n.getStringValue(); },
            "actionflowuniquename": (o, n) => { (o as unknown as Slaitem).actionflowuniquename = n.getStringValue(); },
            "actionurl": (o, n) => { (o as unknown as Slaitem).actionurl = n.getStringValue(); },
            "allowpauseresume": (o, n) => { (o as unknown as Slaitem).allowpauseresume = n.getBooleanValue(); },
            "applicableentity": (o, n) => { (o as unknown as Slaitem).applicableentity = n.getStringValue(); },
            "applicablewhenxml": (o, n) => { (o as unknown as Slaitem).applicablewhenxml = n.getStringValue(); },
            "businesshoursid": (o, n) => { (o as unknown as Slaitem).businesshoursid = n.getObjectValue<Calendar>(createCalendarFromDiscriminatorValue); },
            "changedattributelist": (o, n) => { (o as unknown as Slaitem).changedattributelist = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Slaitem).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Slaitem).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Slaitem).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Slaitem).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Slaitem).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Slaitem).exchangerate = n.getNumberValue(); },
            "failureafter": (o, n) => { (o as unknown as Slaitem).failureafter = n.getNumberValue(); },
            "ismanaged": (o, n) => { (o as unknown as Slaitem).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Slaitem).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Slaitem).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Slaitem).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_advancedpauseconfiguration": (o, n) => { (o as unknown as Slaitem).msdyn_advancedpauseconfiguration = n.getBooleanValue(); },
            "msdyn_migrationtracker_LegacySLAItem_slaitem": (o, n) => { (o as unknown as Slaitem).msdyn_migrationtracker_LegacySLAItem_slaitem = n.getCollectionOfObjectValues<Msdyn_migrationtracker>(createMsdyn_migrationtrackerFromDiscriminatorValue); },
            "msdyn_migrationtracker_ModernSLAItem_slaitem": (o, n) => { (o as unknown as Slaitem).msdyn_migrationtracker_ModernSLAItem_slaitem = n.getCollectionOfObjectValues<Msdyn_migrationtracker>(createMsdyn_migrationtrackerFromDiscriminatorValue); },
            "msdyn_pauseconfigurationxml": (o, n) => { (o as unknown as Slaitem).msdyn_pauseconfigurationxml = n.getStringValue(); },
            "msdyn_slaitem_slakpiinstance": (o, n) => { (o as unknown as Slaitem).msdyn_slaitem_slakpiinstance = n.getCollectionOfObjectValues<Slakpiinstance>(createSlakpiinstanceFromDiscriminatorValue); },
            "msdyn_SLAKPIID": (o, n) => { (o as unknown as Slaitem).msdyn_SLAKPIID = n.getObjectValue<Msdyn_slakpi>(createMsdyn_slakpiFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Slaitem).name = n.getStringValue(); },
            "overwritetime": (o, n) => { (o as unknown as Slaitem).overwritetime = n.getDateValue(); },
            "relatedfield": (o, n) => { (o as unknown as Slaitem).relatedfield = n.getStringValue(); },
            "sequencenumber": (o, n) => { (o as unknown as Slaitem).sequencenumber = n.getNumberValue(); },
            "slaid": (o, n) => { (o as unknown as Slaitem).slaid = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "sLAItem_SyncErrors": (o, n) => { (o as unknown as Slaitem).sLAItem_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "slaitemid": (o, n) => { (o as unknown as Slaitem).slaitemid = n.getStringValue(); },
            "slaitemidunique": (o, n) => { (o as unknown as Slaitem).slaitemidunique = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Slaitem).solutionid = n.getStringValue(); },
            "successconditionsxml": (o, n) => { (o as unknown as Slaitem).successconditionsxml = n.getStringValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Slaitem).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Slaitem).versionnumber = n.getNumberValue(); },
            "warnafter": (o, n) => { (o as unknown as Slaitem).warnafter = n.getNumberValue(); },
            "workflowid": (o, n) => { (o as unknown as Slaitem).workflowid = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the msdyn_advancedpauseconfiguration property value. 
     * @returns a boolean
     */
    public get msdyn_advancedpauseconfiguration() {
        return this._msdyn_advancedpauseconfiguration;
    };
    /**
     * Sets the msdyn_advancedpauseconfiguration property value. 
     * @param value Value to set for the msdyn_advancedpauseconfiguration property.
     */
    public set msdyn_advancedpauseconfiguration(value: boolean | undefined) {
        this._msdyn_advancedpauseconfiguration = value;
    };
    /**
     * Gets the msdyn_migrationtracker_LegacySLAItem_slaitem property value. 
     * @returns a msdyn_migrationtracker
     */
    public get msdyn_migrationtracker_LegacySLAItem_slaitem() {
        return this._msdyn_migrationtracker_LegacySLAItem_slaitem;
    };
    /**
     * Sets the msdyn_migrationtracker_LegacySLAItem_slaitem property value. 
     * @param value Value to set for the msdyn_migrationtracker_LegacySLAItem_slaitem property.
     */
    public set msdyn_migrationtracker_LegacySLAItem_slaitem(value: Msdyn_migrationtracker[] | undefined) {
        this._msdyn_migrationtracker_LegacySLAItem_slaitem = value;
    };
    /**
     * Gets the msdyn_migrationtracker_ModernSLAItem_slaitem property value. 
     * @returns a msdyn_migrationtracker
     */
    public get msdyn_migrationtracker_ModernSLAItem_slaitem() {
        return this._msdyn_migrationtracker_ModernSLAItem_slaitem;
    };
    /**
     * Sets the msdyn_migrationtracker_ModernSLAItem_slaitem property value. 
     * @param value Value to set for the msdyn_migrationtracker_ModernSLAItem_slaitem property.
     */
    public set msdyn_migrationtracker_ModernSLAItem_slaitem(value: Msdyn_migrationtracker[] | undefined) {
        this._msdyn_migrationtracker_ModernSLAItem_slaitem = value;
    };
    /**
     * Gets the msdyn_pauseconfigurationxml property value. 
     * @returns a string
     */
    public get msdyn_pauseconfigurationxml() {
        return this._msdyn_pauseconfigurationxml;
    };
    /**
     * Sets the msdyn_pauseconfigurationxml property value. 
     * @param value Value to set for the msdyn_pauseconfigurationxml property.
     */
    public set msdyn_pauseconfigurationxml(value: string | undefined) {
        this._msdyn_pauseconfigurationxml = value;
    };
    /**
     * Gets the msdyn_slaitem_slakpiinstance property value. 
     * @returns a slakpiinstance
     */
    public get msdyn_slaitem_slakpiinstance() {
        return this._msdyn_slaitem_slakpiinstance;
    };
    /**
     * Sets the msdyn_slaitem_slakpiinstance property value. 
     * @param value Value to set for the msdyn_slaitem_slakpiinstance property.
     */
    public set msdyn_slaitem_slakpiinstance(value: Slakpiinstance[] | undefined) {
        this._msdyn_slaitem_slakpiinstance = value;
    };
    /**
     * Gets the msdyn_SLAKPIID property value. 
     * @returns a msdyn_slakpi
     */
    public get msdyn_SLAKPIID() {
        return this._msdyn_SLAKPIID;
    };
    /**
     * Sets the msdyn_SLAKPIID property value. 
     * @param value Value to set for the msdyn_SLAKPIID property.
     */
    public set msdyn_SLAKPIID(value: Msdyn_slakpi | undefined) {
        this._msdyn_SLAKPIID = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the relatedfield property value. 
     * @returns a string
     */
    public get relatedfield() {
        return this._relatedfield;
    };
    /**
     * Sets the relatedfield property value. 
     * @param value Value to set for the relatedfield property.
     */
    public set relatedfield(value: string | undefined) {
        this._relatedfield = value;
    };
    /**
     * Gets the sequencenumber property value. 
     * @returns a integer
     */
    public get sequencenumber() {
        return this._sequencenumber;
    };
    /**
     * Sets the sequencenumber property value. 
     * @param value Value to set for the sequencenumber property.
     */
    public set sequencenumber(value: number | undefined) {
        this._sequencenumber = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_businesshoursid_value", this._businesshoursid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_slakpiid_value", this._msdyn_slakpiid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_slaid_value", this._slaid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("_workflowid_value", this._workflowid_value);
        writer.writeStringValue("actionflowuniquename", this.actionflowuniquename);
        writer.writeStringValue("actionurl", this.actionurl);
        writer.writeBooleanValue("allowpauseresume", this.allowpauseresume);
        writer.writeStringValue("applicableentity", this.applicableentity);
        writer.writeStringValue("applicablewhenxml", this.applicablewhenxml);
        writer.writeObjectValue<Calendar>("businesshoursid", this.businesshoursid);
        writer.writeStringValue("changedattributelist", this.changedattributelist);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("failureafter", this.failureafter);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeBooleanValue("msdyn_advancedpauseconfiguration", this.msdyn_advancedpauseconfiguration);
        writer.writeCollectionOfObjectValues<Msdyn_migrationtracker>("msdyn_migrationtracker_LegacySLAItem_slaitem", this.msdyn_migrationtracker_LegacySLAItem_slaitem);
        writer.writeCollectionOfObjectValues<Msdyn_migrationtracker>("msdyn_migrationtracker_ModernSLAItem_slaitem", this.msdyn_migrationtracker_ModernSLAItem_slaitem);
        writer.writeStringValue("msdyn_pauseconfigurationxml", this.msdyn_pauseconfigurationxml);
        writer.writeCollectionOfObjectValues<Slakpiinstance>("msdyn_slaitem_slakpiinstance", this.msdyn_slaitem_slakpiinstance);
        writer.writeObjectValue<Msdyn_slakpi>("msdyn_SLAKPIID", this.msdyn_SLAKPIID);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("relatedfield", this.relatedfield);
        writer.writeNumberValue("sequencenumber", this.sequencenumber);
        writer.writeObjectValue<Sla>("slaid", this.slaid);
        writer.writeCollectionOfObjectValues<Syncerror>("sLAItem_SyncErrors", this.sLAItem_SyncErrors);
        writer.writeStringValue("slaitemid", this.slaitemid);
        writer.writeStringValue("slaitemidunique", this.slaitemidunique);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("successconditionsxml", this.successconditionsxml);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeNumberValue("warnafter", this.warnafter);
        writer.writeObjectValue<Workflow>("workflowid", this.workflowid);
    };
    /**
     * Gets the slaid property value. 
     * @returns a sla
     */
    public get slaid() {
        return this._slaid;
    };
    /**
     * Sets the slaid property value. 
     * @param value Value to set for the slaid property.
     */
    public set slaid(value: Sla | undefined) {
        this._slaid = value;
    };
    /**
     * Gets the sLAItem_SyncErrors property value. 
     * @returns a syncerror
     */
    public get sLAItem_SyncErrors() {
        return this._sLAItem_SyncErrors;
    };
    /**
     * Sets the sLAItem_SyncErrors property value. 
     * @param value Value to set for the SLAItem_SyncErrors property.
     */
    public set sLAItem_SyncErrors(value: Syncerror[] | undefined) {
        this._sLAItem_SyncErrors = value;
    };
    /**
     * Gets the slaitemid property value. 
     * @returns a string
     */
    public get slaitemid() {
        return this._slaitemid;
    };
    /**
     * Sets the slaitemid property value. 
     * @param value Value to set for the slaitemid property.
     */
    public set slaitemid(value: string | undefined) {
        this._slaitemid = value;
    };
    /**
     * Gets the slaitemidunique property value. 
     * @returns a string
     */
    public get slaitemidunique() {
        return this._slaitemidunique;
    };
    /**
     * Sets the slaitemidunique property value. 
     * @param value Value to set for the slaitemidunique property.
     */
    public set slaitemidunique(value: string | undefined) {
        this._slaitemidunique = value;
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
    };
    /**
     * Gets the successconditionsxml property value. 
     * @returns a string
     */
    public get successconditionsxml() {
        return this._successconditionsxml;
    };
    /**
     * Sets the successconditionsxml property value. 
     * @param value Value to set for the successconditionsxml property.
     */
    public set successconditionsxml(value: string | undefined) {
        this._successconditionsxml = value;
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
     * Gets the warnafter property value. 
     * @returns a integer
     */
    public get warnafter() {
        return this._warnafter;
    };
    /**
     * Sets the warnafter property value. 
     * @param value Value to set for the warnafter property.
     */
    public set warnafter(value: number | undefined) {
        this._warnafter = value;
    };
    /**
     * Gets the workflowid property value. 
     * @returns a workflow
     */
    public get workflowid() {
        return this._workflowid;
    };
    /**
     * Sets the workflowid property value. 
     * @param value Value to set for the workflowid property.
     */
    public set workflowid(value: Workflow | undefined) {
        this._workflowid = value;
    };
}
